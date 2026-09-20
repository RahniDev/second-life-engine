import { Link } from "react-router";

import "./ItemCard.scss";
import type { Item } from "../../types/item";

const ItemCard = (item: Item) => {
    return (
        <Link to={`/item/${item.id}`}>
            <article>
                <h2>{item.name}</h2>
                <p>{item.material}</p>
            </article>
        </Link>
    );
}

export default ItemCard;