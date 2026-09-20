<?php

namespace App\Controller;

use App\Entity\Item;
use App\Repository\ItemRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Validator\Validator\ValidatorInterface;

final class ApiController extends AbstractController
{
    #[Route('/api/items', name: 'app_items', methods: ['GET'])]
    public function items(ItemRepository $itemRepository): JsonResponse
    {
        $items = $itemRepository->findAll();

        return $this->json(array_map(
            fn(Item $item) => [
                'id' => $item->getId(),
                'name' => $item->getName(),
                'material' => $item->getMaterial(),
            ],
            $items
        ));
    }

    #[Route('/api/items/{id}', name: 'app_item', methods: ['GET'])]
    public function item(int $id, ItemRepository $itemRepository): JsonResponse
    {
        $item = $itemRepository->find($id);

        if (!$item) {
            return $this->json(['error' => 'Item not found'], 404);
        }

        return $this->json([
            'id' => $item->getId(),
            'name' => $item->getName(),
            'material' => $item->getMaterial(),
        ]);
    }
    
    #[Route('/api/items', name: 'app_item_create', methods: ['POST'])]
    public function createItem(
        Request $request,
        EntityManagerInterface $entityManager,
        ValidatorInterface $validator
    ): JsonResponse {
        $data = $request->toArray();

        $item = new Item();

        $item->setName($data['name'] ?? '');
        $item->setMaterial($data['material'] ?? null);

        $errors = $validator->validate($item);

        if (count($errors) > 0) {
            $validationErrors = [];

            foreach ($errors as $error) {
                $validationErrors[] = [
                    'field' => $error->getPropertyPath(),
                    'message' => $error->getMessage(),
                ];
            }

            return $this->json([
                'errors' => $validationErrors,
            ], 422);
        }

        $entityManager->persist($item);
        $entityManager->flush();

        return $this->json([
            'id' => $item->getId(),
            'name' => $item->getName(),
            'material' => $item->getMaterial(),
        ], 201);
    }
}
