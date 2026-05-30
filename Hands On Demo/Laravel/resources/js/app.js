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
