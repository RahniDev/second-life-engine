import { useState, useEffect } from "react";
import ItemCard from "../../components/ItemCard";
import type { Item } from "../../types/item";
import { getItems } from "../../services/api";

const MyInventoryPage = () => {
    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        getItems()
            .then(setItems)
            .catch((error) => {
                console.error(error);
            });
    }, []);
    return (
        <div>
            <h1>My Inventory</h1>
            {items.map((item: Item) => (
                <ItemCard key={item.id} {...item} />
            ))}
        </div>
    );
}

export default MyInventoryPage;