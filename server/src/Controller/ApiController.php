<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;

final class ApiController extends AbstractController
{
    #[Route('/api/items', name: 'app_items', methods: ['GET'])]
    public function items(): JsonResponse
   {
    $items = [
        [
            'id' => 1,
            'name' => 'Old wooden chair',
            'material' => 'Wood'
        ],
        [
            'id' => 2,
            'name' => 'Broken laptop',
            'material' => 'Electronics'
        ],
        [
            'id' => 3,
            'name' => 'Old wool blanket',
            'material' => 'Wool'
        ]
    ];
return $this->json($items);
    }
}

final class ApiController extends AbstractController
    {
    #[Route('/api/items/{id}', name: 'app_item', methods: ['GET'])]
    public function item(string $id): JsonResponse
{
    return $this->json($item);
    }
}
