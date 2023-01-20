// Set global settings
SuSearch.set_custom_options('GlobalSettings', {
    debug: false,
    CaseSensitive: false,
    MaxNumOfSearches: 0, // Max number of searches to perform (0 for unlimited)
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
    },
    CharactersToRemove: ['(', ')', '/', '-'],
    PercentOfPerfectScore: 90, // Get results that are at least this percent of the perfect score
    ParentDiv: 'SuSearchParent',
    NoDropDownSearchCallback: 'noDropDownSearchCallBack',
})
