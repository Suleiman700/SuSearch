<!-- Your HTML file -->
<html>
<body>
<input type="text" id="SuSearchSearchInput" />

<!-- Script file that contains SuSearch settings -->
<script src="./assets/js/script.js" type="module">
</body>
</html>

// Set search field settings
SuSearch.set_custom_options('SearchInputSettings', {
    id: 'SuSearchSearchInput',
        class: 'form-control mt-3',
        autocomplete: 'off',
        placeholder: 'Search By customer id or name',
        dir: 'auto',
        style: 'display: grid; height: 50px; width: 50vw; margin: auto; text-align: center;', // Search input style
        clear_on_pick: true,
        SearchOnlyAfterFinishTyping: {
        State: true,
            Timer: 250,
    },
})
