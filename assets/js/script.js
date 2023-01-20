import SuSearch from '../../libs/SuSearch/SuSearch.js';


const source2 = [
    {
        "id": 1,
        "title": "The Beetlejuice",
        "year": "1988",
        "runtime": "92",
        "actors": "Alec Baldwin, Geena Davis, Annie McEnroe, Maurice Page",
    },
    {
        "id": 2,
        "title": "The Cotton Club",
        "year": "1984",
        "runtime": "127",
        "actors": "Richard Gere, Gregory Hines, Diane Lane, Lonette McKee",
    },
    {
        "id": 3,
        "title": "The Shawshank Redemption",
        "year": "1994",
        "runtime": "142",
        "actors": "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler",
    },
    {
        "id": 4,
        "title": "Crocodile Dundee",
        "year": "1986",
        "runtime": "97",
        "actors": "Paul Hogan, Linda Kozlowski, John Meillon, David Gulpilil",
    },
    {
        "id": 5,
        "title": "Valkyrie",
        "year": "2008",
        "runtime": "121",
        "actors": "Tom Cruise, Kenneth Branagh, Bill Nighy, Tom Wilkinson",
    }
]
SuSearch.set_search_source = source2

const SuSearch_CallBackFunc = (_item_value, _item_text, _item_data) => {
    $('#callback_output').text(`
Callback after picking item from the dropdown

Selected Item ID: ${_item_value}
Selected Item Name: ${_item_text}
Selected Item Data: ${JSON.stringify(_item_data)}
    `)
}

/**
 *
 * @param _data {Object}
 */
const SuSearch_SearchAllCallBackFunc = (_data) => {
    $('#callback_output').text(`
Callback after clicking 'Search All Results' button

Data: ${JSON.stringify(_data)}
    `)
}

const SuSearch_NoResultsCallBackFunc = (_data) => {
    $('#callback_output').text(`
Callback after no search results were found
    `)
}

// Set callback function when user clicks on one of the dropdown search items
SuSearch.set_custom_options('ItemsSettings', {
    Callback: SuSearch_CallBackFunc
})

// Set callback function when user clicks on one of the dropdown search items
SuSearch.set_custom_options('BuildDropdown', {
    NoResultsSettings: {
        text: 'No Results Found',
        class: 'text-danger',
        style: '',
        Callback: SuSearch_NoResultsCallBackFunc
    },
    SearchAllSettings: {
        State: true,
        class: 'text-danger',
        style: '',
        text: 'Search All Results',
        Callback: SuSearch_SearchAllCallBackFunc,
    },
})


// SuSearch.set_custom_options('KeysToSearchIn', {
//     Key: 'Name',
//     MatchWord: true
// })

SuSearch.init()


const SetGlobalSettings = () => {
    const CaseSensitive = $('#COLLAPSE_search_settings #CaseSensitive').val()
    const Debug = $('#COLLAPSE_search_settings #Debug').val()
    const MaxNumOfSearches = $('#COLLAPSE_search_settings #MaxNumOfSearches').val()
    const PercentOfPerfectScore = $('#COLLAPSE_search_settings #PercentOfPerfectScore').val()

    SuSearch.set_custom_options('GlobalSettings', {
        CaseSensitive: (CaseSensitive==='true'),
        debug: (Debug==='true'),
        MaxNumOfSearches: parseInt(MaxNumOfSearches),
        PercentOfPerfectScore: PercentOfPerfectScore
    })
}
const SetSearchFieldSettings = () => {
    const type = $('#COLLAPSE_search_field_settings #type').val()
    const input_class = $('#COLLAPSE_search_field_settings #class').val()
    const placeholder = $('#COLLAPSE_search_field_settings #placeholder').val()
    const clear_on_pick = $('#COLLAPSE_search_field_settings #clear_on_pick').val()
    const dir = $('#COLLAPSE_search_field_settings #dir').val()
    const style = $('#COLLAPSE_search_field_settings #style').val()
    const search_after_delay = $('#COLLAPSE_search_field_settings #search_after_delay').val()
    const autocomplete = $('#COLLAPSE_search_field_settings #autocomplete').val()

    SuSearch.set_custom_options('SearchInputSettings', {
        'type': type,
        'class': input_class,
        placeholder: placeholder,
        clear_on_pick: clear_on_pick==='true',
        dir: dir,
        style: style,
        SearchOnlyAfterFinishTyping: {
            State: search_after_delay!=='false',
            Timer: parseFloat(search_after_delay)
        },
        autocomplete: autocomplete
    })
}
const SetDropdownSettings = () => {
    const MaxNumOfResultsToShow = $('#COLLAPSE_dropdown_settings #MaxNumOfResultsToShow').val()
    const DropDownStyle = $('#COLLAPSE_dropdown_settings #DropDownStyle').val()

    const DropDown_EnableHighlight = $('#COLLAPSE_dropdown_settings #DropDown_EnableHighlight').val()
    const DropDown_HighlightClass = $('#COLLAPSE_dropdown_settings #DropDown_HighlightClass').val()
    const DropDown_HighlightStyle = $('#COLLAPSE_dropdown_settings #DropDown_HighlightStyle').val()

    const DropDown_ItemsSettings_Class = $('#COLLAPSE_dropdown_settings #DropDown_ItemsSettings_Class').val()
    const DropDown_ItemsSettings_Style = $('#COLLAPSE_dropdown_settings #DropDown_ItemsSettings_Style').val()

    const DropDown_SearchAllItemsSettings_Class = $('#COLLAPSE_dropdown_settings #DropDown_SearchAllItemsSettings_Class').val()
    const DropDown_SearchAllItemsSettings_Style = $('#COLLAPSE_dropdown_settings #DropDown_SearchAllItemsSettings_Style').val()
    const DropDown_SearchAllItemsSettings_Text = $('#COLLAPSE_dropdown_settings #DropDown_SearchAllItemsSettings_Text').val()

    const DropDown_ScoreSettings_MarkBG = $('#COLLAPSE_dropdown_settings #DropDown_ScoreSettings_MarkBG').val()
    const DropDown_ScoreSettings_MinHighScore = $('#COLLAPSE_dropdown_settings #DropDown_ScoreSettings_MinHighScore').val()
    const DropDown_ScoreSettings_Class = $('#COLLAPSE_dropdown_settings #DropDown_ScoreSettings_Class').val()
    const DropDown_ScoreSettings_Style = $('#COLLAPSE_dropdown_settings #DropDown_ScoreSettings_Style').val()

    const DropDown_NoResultsSettings_Text = $('#COLLAPSE_dropdown_settings #DropDown_NoResultsSettings_Text').val()
    const DropDown_NoResultsSettings_Class = $('#COLLAPSE_dropdown_settings #DropDown_NoResultsSettings_Class').val()
    const DropDown_NoResultsSettings_Style = $('#COLLAPSE_dropdown_settings #DropDown_NoResultsSettings_Style').val()

    const DropDown_CollapseAnimation = $('#COLLAPSE_dropdown_settings #DropDown_CollapseAnimation').val()
    const DropDown_ExpandOnSearchInputClick = $('#COLLAPSE_dropdown_settings #DropDown_ExpandOnSearchInputClick').val()
    const DropDown_HideOnItemPick = $('#COLLAPSE_dropdown_settings #DropDown_HideOnItemPick').val()
    const DropDown_CollapseOnFocusLose = $('#COLLAPSE_dropdown_settings #DropDown_CollapseOnFocusLose').val()

    SuSearch.set_custom_options('BuildDropdown', {
        MaxNumOfResultsToShow: parseInt(MaxNumOfResultsToShow),
        DropDownStyle: DropDownStyle,
        HighlightSettings: {
            State: (DropDown_EnableHighlight==='true'),
            class: DropDown_HighlightClass,
            style: DropDown_HighlightStyle
        },
        ItemsSettings: {
            class: DropDown_ItemsSettings_Class,
            style: DropDown_ItemsSettings_Style,
            Callback: SuSearch_CallBackFunc
        },
        SearchAllSettings: {
            State: true,
            class: DropDown_SearchAllItemsSettings_Class,
            style: DropDown_SearchAllItemsSettings_Style,
            text: DropDown_SearchAllItemsSettings_Text,
            Callback: SuSearch_SearchAllCallBackFunc,
        },
        ScoreSettings: {
            MarkBGOnHighScore: (DropDown_ScoreSettings_MarkBG==='true'),
            MinHighScore: parseFloat(DropDown_ScoreSettings_MinHighScore),
            class: DropDown_ScoreSettings_Class,
            style: DropDown_ScoreSettings_Style,
        },
        NoResultsSettings: {
            text: DropDown_NoResultsSettings_Text,
            class: DropDown_NoResultsSettings_Class,
            style: DropDown_NoResultsSettings_Style,
            Callback: SuSearch_NoResultsCallBackFunc
        },
        CollapseSettings: {
            CollapseOnLoseFocus: (DropDown_CollapseOnFocusLose==='true'),
            HideOnItemClick: (DropDown_HideOnItemPick==='true'),
            ExpandOnSearchInputClick: (DropDown_ExpandOnSearchInputClick==='true'),
            CollapseAnimation: DropDown_CollapseAnimation,
        },
    })
}
const SetAllSettings = () => {
    SetGlobalSettings()
    SetSearchFieldSettings()
    SetDropdownSettings()
}

$('#BTN_search_settings').click(() => {
    SetAllSettings()
    $('#SuSearchParent').html('')
    SuSearch.init()
})

$('#BTN_search_field_settings').click(() => {
    SetAllSettings()
    $('#SuSearchParent').html('')
    SuSearch.init()
})

$('#BTN_dropdown_settings').click(() => {
    SetAllSettings()
    $('#SuSearchParent').html('')
    SuSearch.init()
})

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})
