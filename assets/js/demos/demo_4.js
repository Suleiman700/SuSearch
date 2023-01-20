import SuSearch from '../../../libs/SuSearch/SuSearch.js'; // SuSearch

// Set SuSearch source
const source = [
    {
        "id": 1,
        "title": "iPhone 9",
        "description": "An apple mobile which is nothing like apple",
        "price": 549,
        "discountPercentage": 12.96,
        "rating": 4.69,
        "stock": 94,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
    },
    {
        "id": 2,
        "title": "iPhone X",
        "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        "price": 899,
        "discountPercentage": 17.94,
        "rating": 4.44,
        "stock": 34,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://dummyjson.com/image/i/products/2/thumbnail.jpg",
    },
    {
        "id": 3,
        "title": "Samsung Universe 9",
        "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
        "price": 1249,
        "discountPercentage": 15.46,
        "rating": 4.09,
        "stock": 36,
        "brand": "Samsung",
        "category": "smartphones",
        "thumbnail": "https://dummyjson.com/image/i/products/3/thumbnail.jpg",
    },
    {
        "id": 4,
        "title": "OPPOF19",
        "description": "OPPO F19 is officially announced on April 2021.",
        "price": 280,
        "discountPercentage": 17.91,
        "rating": 4.3,
        "stock": 123,
        "brand": "OPPO",
        "category": "smartphones",
        "thumbnail": "https://dummyjson.com/image/i/products/4/thumbnail.jpg",
    },
    {
        "id": 5,
        "title": "Huawei P30",
        "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
        "price": 499,
        "discountPercentage": 10.58,
        "rating": 4.09,
        "stock": 32,
        "brand": "Huawei",
        "category": "smartphones",
        "thumbnail": "https://dummyjson.com/image/i/products/5/thumbnail.jpg",
    },
    {
        "id": 6,
        "title": "MacBook Pro",
        "description": "MacBook Pro 2021 with mini-LED display may launch between September, November",
        "price": 1749,
        "discountPercentage": 11.02,
        "rating": 4.57,
        "stock": 83,
        "brand": "APPle",
        "category": "laptops",
        "thumbnail": "https://dummyjson.com/image/i/products/6/thumbnail.png",
    },
    {
        "id": 7,
        "title": "Samsung Galaxy Book",
        "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
        "price": 1499,
        "discountPercentage": 4.15,
        "rating": 4.25,
        "stock": 50,
        "brand": "Samsung",
        "category": "laptops",
        "thumbnail": "https://dummyjson.com/image/i/products/7/thumbnail.jpg",
    },
    {
        "id": 8,
        "title": "Microsoft Surface Laptop 4",
        "description": "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
        "price": 1499,
        "discountPercentage": 10.23,
        "rating": 4.43,
        "stock": 68,
        "brand": "Microsoft Surface",
        "category": "laptops",
        "thumbnail": "https://dummyjson.com/image/i/products/8/thumbnail.jpg",
    },
    {
        "id": 9,
        "title": "Infinix INBOOK",
        "description": "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
        "price": 1099,
        "discountPercentage": 11.83,
        "rating": 4.54,
        "stock": 96,
        "brand": "Infinix",
        "category": "laptops",
        "thumbnail": "https://dummyjson.com/image/i/products/9/thumbnail.jpg",
    },
    {
        "id": 10,
        "title": "HP Pavilion 15-DK1056WM",
        "description": "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
        "price": 1099,
        "discountPercentage": 6.18,
        "rating": 4.43,
        "stock": 89,
        "brand": "HP Pavilion",
        "category": "laptops",
        "thumbnail": "https://dummyjson.com/image/i/products/10/thumbnail.jpeg",
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
    ItemValueAndText: ['id', 'title'] // Code is the item value and name is the item text that will be displayed to the user
})

// Set keys to search inside the object
SuSearch.set_custom_options('GlobalSettings', {
    KeysToSearchIn: {
        keys: [
            // Case sensitive
            {
                Key: 'title',
                MatchWord: false
            },
            {
                Key: 'description',
                MatchWord: false
            },
            {
                Key: 'category',
                MatchWord: false
            }
        ]
    }
})

// Set search field settings
SuSearch.set_custom_options('SearchInputSettings', {
    class: 'form-control mt-3',
    autocomplete: 'off',
    placeholder: 'Search for products with rating bigger than 4.3',
    dir: 'auto',
    clear_on_pick: true,
    SearchOnlyAfterFinishTyping: {
        State: true,
        Timer: 250,
    }
})

// =====================================================================================================================

// Search for products with rating bigger than 5.0
SuSearch.set_having = [
    {
        key: 'rating',
        operation: '>',
        value: '4.3'
    },
]

// Initialize SuSearch
SuSearch.init()
