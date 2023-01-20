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

// Set keys to search inside the object
SuSearch.set_custom_options('GlobalSettings', {
    KeysToSearchIn: {
        keys: [
            // Case sensitive
            {
                Key: 'id',
                MatchWord: false
            },
            {
                Key: 'name',
                MatchWord: false
            },
        ]
    }
})
