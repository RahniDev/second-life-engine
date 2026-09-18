import type { Item } from "../types/item";

const API_URL = "http://127.0.0.1:8000/api";

export async function getItems(): Promise<Item[]> {
  const response = await fetch(`${API_URL}/items`);

  if (!response.ok) {
    throw new Error("Failed to fetch items");
  }

  return response.json();
}

export async function getItem(id: string): Promise<Item> {
  const response = await fetch(`${API_URL}/items/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch item");
  }

  return response.json();
}