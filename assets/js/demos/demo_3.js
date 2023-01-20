import SuSearch from '../../../libs/SuSearch/SuSearch.js'; // SuSearch

// Set SuSearch source
const source = [
    {
        "userId": 1,
        "firstName": "Krish",
        "lastName": "Lee",
        "phoneNumber": "123456",
        "emailAddress": "krish.lee@susearch"
    },
    {
        "userId": 2,
        "firstName": "racks",
        "lastName": "jacson",
        "phoneNumber": "123456",
        "emailAddress": "racks.jacson@susearch"
    },
    {
        "userId": 3,
        "firstName": "denial",
        "lastName": "roast",
        "phoneNumber": "33333333",
        "emailAddress": "denial.roast@susearch"
    },
    {
        "userId": 4,
        "firstName": "devid",
        "lastName": "neo",
        "phoneNumber": "222222222",
        "emailAddress": "devid.neo@susearch"
    },
    {
        "userId": 5,
        "firstName": "jone",
        "lastName": "mac",
        "phoneNumber": "111111111",
        "emailAddress": "jone.mac@susearch"
    }
]

SuSearch.set_search_source = source

// =====================================================================================================================

/**
 * Callback function when you pick item from the dropdown
 * @param _item_value {String}
 * @param _item_text {String}
 * @param _item_data {Object}
 */
const SuSearch_CallBackFunc = (_item_value, _item_text, _item_data) => {
    console.log(_item_value, _item_text, _item_data)

    // Show callback inside a html code-block
    $('#callback_output').text(`
        id: ${JSON.stringify(_item_value)}
        text: ${JSON.stringify(_item_text)}
        data: ${JSON.stringify(_item_data)}
    `)
}

/**
 *  Callback function when you click 'Search All Items'
 * @param _data {Object}
 */
const SuSearch_SearchAllCallBackFunc = (_data) => {
    console.log(_data)

    // Show callback inside a html code-block
    $('#callback_output').text(`
        data: ${JSON.stringify(_data)}
    `)
}

/**
 * Callback function when there are no results found
 */
const SuSearch_NoResultsCallBackFunc = () => {
    // ...
    // Show callback inside a html code-block
    $('#callback_output').text(`
        No Results Found!
    `)
}


// =====================================================================================================================

// Set callback function when user clicks on one of the dropdown search items
SuSearch.set_custom_options('ItemsSettings', {
    Callback: SuSearch_CallBackFunc
})

// Set dropdown custom settings
SuSearch.set_custom_options('BuildDropdown', {
    // Settings for 'No Results Found' text
    NoResultsSettings: {
        text: 'No Results Found',
        class: 'text-danger',
        style: '',
        Callback: SuSearch_NoResultsCallBackFunc
    },
    // Settings for the 'Search All Results' button
    SearchAllSettings: {
        State: true,
        class: 'text-danger',
        style: '',
        text: 'Search All Results',
        Callback: SuSearch_SearchAllCallBackFunc,
    },
    ItemValueAndText: ['userId', 'emailAddress'] // Code is the item value and name is the item text that will be displayed to the user
})

// Set keys to search inside the object
SuSearch.set_custom_options('GlobalSettings', {
    KeysToSearchIn: {
        keys: [
            // Case sensitive
            {
                Key: 'firstName',
                MatchWord: false
            },
            {
                Key: 'lastName',
                MatchWord: false
            },
            {
                Key: 'phoneNumber',
                MatchWord: false
            },
        ]
    }
})

// Set search field settings
SuSearch.set_custom_options('SearchInputSettings', {
    class: 'form-control mt-3',
    autocomplete: 'off',
    placeholder: 'Search for users by first name, last name or phone number',
    dir: 'auto',
    clear_on_pick: true,
    SearchOnlyAfterFinishTyping: {
        State: true,
        Timer: 250,
    }
})

// =====================================================================================================================

// Initialize SuSearch
SuSearch.init()
