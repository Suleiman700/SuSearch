import SuSearch from '../../../libs/SuSearch/SuSearch.js'; // SuSearch

// Set SuSearch source
const source = [
    {
        "price": 2500,
        "id": "motorola-xoom-with-wi-fi",
        "imageUrl": "img/phones/motorola-xoom-with-wi-fi.0.jpg",
        "name": "Motorola XOOM\u2122 with Wi-Fi",
        "snippet": "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb)."
    },
    {
        "price": 3500,
        "id": "motorola-xoom",
        "imageUrl": "img/phones/motorola-xoom.0.jpg",
        "name": "MOTOROLA XOOM\u2122",
        "snippet": "The Next, Next Generation\n\nExperience the future with MOTOROLA XOOM, the world's first tablet powered by Android 3.0 (Honeycomb)."
    },
    {
        "price": 1500,
        "carrier": "AT&amp;T",
        "id": "motorola-atrix-4g",
        "imageUrl": "img/phones/motorola-atrix-4g.0.jpg",
        "name": "MOTOROLA ATRIX\u2122 4G",
        "snippet": "MOTOROLA ATRIX 4G the world's most powerful smartphone."
    },
    {
        "price": 500,
        "id": "dell-streak-7",
        "imageUrl": "img/phones/dell-streak-7.0.jpg",
        "name": "Dell Streak 7",
        "snippet": "Introducing Dell\u2122 Streak 7. Share photos, videos and movies together. It\u2019s small enough to carry around, big enough to gather around."
    },
    {
        "price": 1600,
        "carrier": "Cellular South",
        "id": "samsung-gem",
        "imageUrl": "img/phones/samsung-gem.0.jpg",
        "name": "Samsung Gem\u2122",
        "snippet": "The Samsung Gem\u2122 brings you everything that you would expect and more from a touch display smart phone \u2013 more apps, more features and a more affordable price."
    },
    {
        "price": 5500,
        "carrier": "Dell",
        "id": "dell-venue",
        "imageUrl": "img/phones/dell-venue.0.jpg",
        "name": "Dell Venue",
        "snippet": "The Dell Venue; Your Personal Express Lane to Everything"
    },
    {
        "price": 2000,
        "carrier": "Best Buy",
        "id": "nexus-s",
        "imageUrl": "img/phones/nexus-s.0.jpg",
        "name": "Nexus S",
        "snippet": "Fast just got faster with Nexus S. A pure Google experience, Nexus S is the first phone to run Gingerbread (Android 2.3), the fastest version of Android yet."
    },
    {
        "price": 1000,
        "carrier": "Cellular South",
        "id": "lg-axis",
        "imageUrl": "img/phones/lg-axis.0.jpg",
        "name": "LG Axis",
        "snippet": "Android Powered, Google Maps Navigation, 5 Customizable Home Screens"
    },
    {
        "price": 650,
        "id": "samsung-galaxy-tab",
        "imageUrl": "img/phones/samsung-galaxy-tab.0.jpg",
        "name": "Samsung Galaxy Tab\u2122",
        "snippet": "Feel Free to Tab\u2122. The Samsung Galaxy Tab\u2122 brings you an ultra-mobile entertainment experience through its 7\u201d display, high-power processor and Adobe\u00ae Flash\u00ae Player compatibility."
    },
    {
        "price": 800,
        "carrier": "Cellular South",
        "id": "samsung-showcase-a-galaxy-s-phone",
        "imageUrl": "img/phones/samsung-showcase-a-galaxy-s-phone.0.jpg",
        "name": "Samsung Showcase\u2122 a Galaxy S\u2122 phone",
        "snippet": "The Samsung Showcase\u2122 delivers a cinema quality experience like you\u2019ve never seen before. Its innovative 4\u201d touch display technology provides rich picture brilliance, even outdoors"
    },
    {
        "price": 3600,
        "carrier": "Verizon",
        "id": "droid-2-global-by-motorola",
        "imageUrl": "img/phones/droid-2-global-by-motorola.0.jpg",
        "name": "DROID\u2122 2 Global by Motorola",
        "snippet": "The first smartphone with a 1.2 GHz processor and global capabilities."
    },
    {
        "price": 1800,
        "carrier": "Verizon",
        "id": "droid-pro-by-motorola",
        "imageUrl": "img/phones/droid-pro-by-motorola.0.jpg",
        "name": "DROID\u2122 Pro by Motorola",
        "snippet": "The next generation of DOES."
    },
    {
        "price": 550,
        "carrier": "AT&amp;T",
        "id": "motorola-bravo-with-motoblur",
        "imageUrl": "img/phones/motorola-bravo-with-motoblur.0.jpg",
        "name": "MOTOROLA BRAVO\u2122 with MOTOBLUR\u2122",
        "snippet": "An experience to cheer about."
    },
    {
        "price": 5000,
        "carrier": "T-Mobile",
        "id": "motorola-defy-with-motoblur",
        "imageUrl": "img/phones/motorola-defy-with-motoblur.0.jpg",
        "name": "Motorola DEFY\u2122 with MOTOBLUR\u2122",
        "snippet": "Are you ready for everything life throws your way?"
    },
    {
        "price": 2850,
        "carrier": "T-Mobile",
        "id": "t-mobile-mytouch-4g",
        "imageUrl": "img/phones/t-mobile-mytouch-4g.0.jpg",
        "name": "T-Mobile myTouch 4G",
        "snippet": "The T-Mobile myTouch 4G is a premium smartphone designed to deliver blazing fast 4G speeds so that you can video chat from practically anywhere, with or without Wi-Fi."
    },
    {
        "price": 680,
        "carrier": "US Cellular",
        "id": "samsung-mesmerize-a-galaxy-s-phone",
        "imageUrl": "img/phones/samsung-mesmerize-a-galaxy-s-phone.0.jpg",
        "name": "Samsung Mesmerize\u2122 a Galaxy S\u2122 phone",
        "snippet": "The Samsung Mesmerize\u2122 delivers a cinema quality experience like you\u2019ve never seen before. Its innovative 4\u201d touch display technology provides rich picture brilliance,even outdoors"
    },
    {
        "price": 1750,
        "carrier": "Sprint",
        "id": "sanyo-zio",
        "imageUrl": "img/phones/sanyo-zio.0.jpg",
        "name": "SANYO ZIO",
        "snippet": "The Sanyo Zio by Kyocera is an Android smartphone with a combination of ultra-sleek styling, strong performance and unprecedented value."
    },
    {
        "price": 1122,
        "id": "samsung-transform",
        "imageUrl": "img/phones/samsung-transform.0.jpg",
        "name": "Samsung Transform\u2122",
        "snippet": "The Samsung Transform\u2122 brings you a fun way to customize your Android powered touch screen phone to just the way you like it through your favorite themed \u201cSprint ID Service Pack\u201d."
    },
    {
        "price": 915,
        "id": "t-mobile-g2",
        "imageUrl": "img/phones/t-mobile-g2.0.jpg",
        "name": "T-Mobile G2",
        "snippet": "The T-Mobile G2 with Google is the first smartphone built for 4G speeds on T-Mobile's new network. Get the information you need, faster than you ever thought possible."
    },
    {
        "price": 950,
        "id": "motorola-charm-with-motoblur",
        "imageUrl": "img/phones/motorola-charm-with-motoblur.0.jpg",
        "name": "Motorola CHARM\u2122 with MOTOBLUR\u2122",
        "snippet": "Motorola CHARM fits easily in your pocket or palm.  Includes MOTOBLUR service."
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
    ItemValueAndText: ['id', 'name'] // Code is the item value and name is the item text that will be displayed to the user
})

// Set keys to search inside the object
SuSearch.set_custom_options('GlobalSettings', {
    KeysToSearchIn: {
        keys: [
            // Case sensitive
            {
                Key: 'name',
                MatchWord: false
            },
            {
                Key: 'snippet',
                MatchWord: false
            },
        ]
    }
})

// Set search field settings
SuSearch.set_custom_options('SearchInputSettings', {
    class: 'form-control mt-3',
    autocomplete: 'off',
    placeholder: 'Search for all phones that their price is bigger than 2500',
    dir: 'auto',
    clear_on_pick: true,
    SearchOnlyAfterFinishTyping: {
        State: true,
        Timer: 250,
    }
})

// =====================================================================================================================


// Search for all phones that their price is bigger than 2500
SuSearch.set_having = [
    {
        key: 'price',
        operation: '>',
        value: '2500'
    },
]

// Initialize SuSearch
SuSearch.init()
