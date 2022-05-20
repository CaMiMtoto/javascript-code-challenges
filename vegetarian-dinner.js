function vegetarianMenu(menu) {
    const menuNode = document.querySelector('#menu');

    const vegetarianItems = menu.filter(item => item.isVegetarian === true);

    vegetarianItems.forEach(item => {
        const dish = document.createElement('li');
        dish.textContent = `${item.name} - ${item.price}`;
        menuNode.appendChild(dish);
    });
}

const menu = [
    {
        name: 'Pizza',
        price: '$10',
        isVegetarian: true
    },
    {
        name: 'Burger',
        price: '$5',
        isVegetarian: false
    },
    {
        name: 'Salad',
        price: '$3',
        isVegetarian: true
    },
    {
        name: 'Cake',
        price: '$2',
        isVegetarian: false
    },
    {
        name: 'Ice Cream',
        price: '$1',
        isVegetarian: true
    },
    {
        name: 'Coffee',
        price: '$2',
        isVegetarian: false
    }
];

vegetarianMenu(menu);