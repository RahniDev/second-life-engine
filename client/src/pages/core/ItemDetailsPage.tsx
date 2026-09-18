import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getItem } from "../../services/api";
import type { Item } from "../../types/item";

const ItemDetailsPage = () => {
    const { id } = useParams<{ id: string }>();
    const [item, setItem] = useState<Item | null>(null);

    useEffect(() => {
        if (!id) return;
        getItem(id)
            .then(setItem)
            .catch((error) => {
                console.error(error);
            });
    }, [id]);

    if (!item) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>{item.name}</h1>
        </div>
    );
}

export default ItemDetailsPage;