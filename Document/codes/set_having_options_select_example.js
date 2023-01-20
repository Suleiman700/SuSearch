<!-- Your HTML file -->
<html>
<body>
<select class="form-control" id="filter_type">
    <option value="male">Male</option>
    <option value="female">Female</option>
</select>

<!-- Script file that contains SuSearch settings -->
<script src="./assets/js/script.js" type="module">
</body>
</html>



// Example of your script.js file
$('#filter_type').on('change', () => {
    const selected_type = $('#filter_type').val() // male | female

    // Search customers by selected type only
    SuSearch.set_having = [
        {
            key: 'type',
            operation: '===',
            value: selected_type
        },
    ]
})
