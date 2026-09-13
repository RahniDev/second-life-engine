export async function getItems() {
    const response = await fetch('http://127.0.0.1:8000/api/items');
    return response.json();
}