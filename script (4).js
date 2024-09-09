async function fetchIngredients(productName, elementId) {
    // Example API URL (Replace with a real API endpoint)
    const apiUrl = `https://api.example.com/ingredients?product=${encodeURIComponent(productName)}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        document.getElementById(elementId).innerText = data.ingredients || 'Ingredients not found.';
    } catch (error) {
        document.getElementById(elementId).innerText = 'Error fetching ingredients.';
    }
}

document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents form from submitting the traditional way
    const product1 = document.getElementById('product1').value;
    const product2 = document.getElementById('product2').value;

    if (product1) {
        fetchIngredients(product1, 'ingredients1');
    }

    if (product2) {
        fetchIngredients(product2, 'ingredients2');
    }
});
