/**
 * Callback function when there are no results found
 */
const SuSearch_NoResultsCallBackFunc = () => {
    console.log('No Results Found')
}


/**
 * Callback function when you pick item from the dropdown
 * @param _item_value {String} > Example: 0
 * @param _item_text {String} > Example: John Smith
 * @param _item_data {Object} > Example: {id: 0, name: 'John Smith', age: 37, type: 'male'}
 */
const SuSearch_CallBackFunc = (_item_value, _item_text, _item_data) => {
    console.log(_item_value, _item_text, _item_data)
}


/**
 *  Callback function when you click 'Search All Items'
 * @param _data {Object} > Example:
 [
 {id: 0, name: 'John Smith', age: 37, type: 'male'},
 {id: 1, name: 'Hanna Hayner', age: 24, type: 'female'}
 ]
 */
const SuSearch_SearchAllCallBackFunc = (_data) => {
    console.log(_data)
}


// Set dropdown item click callback
SuSearch.set_custom_options('ItemsSettings', {
    Callback: SuSearch_CallBackFunc
})


SuSearch.set_custom_options('BuildDropdown', {
    // Settings for 'No Results Found' text
    NoResultsSettings: {
        text: 'No Results Found',
        class: 'text-danger',
        style: '',
        Callback: SuSearch_NoResultsCallBackFunc // <- Set no results callback
    },
    // Settings for the 'Search All Results' button
    SearchAllSettings: {
        State: true,
        class: 'text-danger',
        style: '',
        text: 'Search All Results',
        Callback: SuSearch_SearchAllCallBackFunc, // <- Set Search All callback
    },
})
