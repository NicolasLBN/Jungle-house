function ShoppingList() {

    const plantList = [
        {
            name: 'monstera',
            category: 'classique',
            id: '1ed',
            isBestSale: true
        },
        'ficus lyrata',
        'pothos argenté',
        'yucca',
        'palmier'
    ]

    return (
        <ul>
            {plantList.map((plant) => (
                <li key={plant.id}>
                    {plant.name ? plant.name : plant}
                    {plant.isBestSale && <span>🔥</span>}
                </li>
            ))}
        </ul>
    )
}

export default ShoppingList