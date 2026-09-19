<?php

namespace App\Controller;

use App\Entity\Item;
use App\Repository\ItemRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;

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
}