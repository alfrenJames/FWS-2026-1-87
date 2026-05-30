<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <title>test</title>
</head>

<body>
    <div class="container mt-5">
        <h1 class="text-center">Welcome to Shoe Inventory</h1>
        <p class="text-center">Manage your shoe collection with ease.</p>
    </div>
    @yield('content')
</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
<script>
document.addEventListener('DOMContentLoaded', function() {

    const searchName = document.getElementById('searchName');
    const searchBrand = document.getElementById('searchBrand');
    const searchCategory = document.getElementById('searchCategory');

    function filterTable() {

        const nameValue = searchName.value.toLowerCase();
        const brandValue = searchBrand.value.toLowerCase();
        const categoryValue = searchCategory.value.toLowerCase();

        const rows = document.querySelectorAll('#shoeTable tr');

        rows.forEach(row => {

            const name = row.cells[0].textContent.toLowerCase();
            const brand = row.cells[1].textContent.toLowerCase();
            const category = row.cells[2].textContent.toLowerCase();

            const matchName = name.includes(nameValue);
            const matchBrand = brand.includes(brandValue);
            const matchCategory = category.includes(categoryValue);

            if (matchName && matchBrand && matchCategory) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    }

    searchName.addEventListener('input', filterTable);
    searchBrand.addEventListener('input', filterTable);
    searchCategory.addEventListener('input', filterTable);

});
</script>

</html>