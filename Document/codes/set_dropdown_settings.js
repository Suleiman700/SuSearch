// Set dropdown custom settings
SuSearch.set_custom_options('BuildDropdown', {
    State: true, // DO NOT CHANGE
    // Highlight settings
    HighlightSettings: {
        State: true,
        class: '',
        style: 'color: red'
    },
    // Dropdown items settings
    ItemsSettings: {
        class: '',
        style: 'background: transparent;',
        Callback: null
    },
    // "Search All Results" button settings
    SearchAllSettings: {
        State: true,
        class: 'text-danger',
        style: '',
        text: 'Search All Results',
        Callback: null,
    },
    // Score settings
    ScoreSettings: {
        MarkBGOnHighScore: true,
        MinHighScore: 100,
        class: '',
        style: 'box-shadow: 0px 0px 10px 0px #00456761;',
    },
    // Dropdown collapse settings
    CollapseSettings: {
        CollapseOnLoseFocus: true,
        HideOnItemClick: true,
        ExpandOnSearchInputClick: true,
        CollapseAnimation: 'slide' // The way of showing and hiding the dropdown | 'slide' or 'toggle'
    },
    ItemValueAndText: ['id', 'title'], // The value and text to put in the dropdown item | KEY, TEXT | Case sensitive
    NoResultsSettings: {
        text: 'No results found!',
        class: 'text-danger',
        style: '',
        Callback: '', // Callback function to run when no results are found
    },
    MaxNumOfResultsToShow: 6, // Max number of results to show in the dropdown
    DropDownStyle: 'width: fit-content; filter: drop-shadow(gray 1px 6px 4px);', // Dropdown style
})
