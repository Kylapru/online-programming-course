document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.item');

    let totalSum = 0;
    let maxPrice = 0;
    let expensiveItemName = "";

    items.forEach(item => {
        if (item.classList.contains('active')) {
            item.classList.add('highlight');
        }

        const price = Number(item.dataset.price);
        totalSum += price;

        if (price > maxPrice) {
            maxPrice = price;
            expensiveItemName = item.textContent;
        }
    });

    console.log(`Общая стоимость всех товаров: ${totalSum}`);
    console.log(`Самый дорогой товар: ${expensiveItemName} с ценой ${maxPrice}`);
});