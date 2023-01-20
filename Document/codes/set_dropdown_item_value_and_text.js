const data = [
    {
        id: 0,
        name: 'John Smith',
        age: 37,
        type: 'male'
    },
    {
        id: 1,
        name: 'Hanna Hayner',
        age: 24,
        type: 'female'
    },
]

// Set item value and text
SuSearch.set_custom_options('BuildDropdown', {
    ItemValueAndText: ['id', 'name']
})
