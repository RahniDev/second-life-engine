
const ItemCard = ({ item }) => {
    return (
        <div>
            <h3>{item.name}</h3>
            <p>{item.material}</p>
        </div>
    );
}

export default ItemCard;