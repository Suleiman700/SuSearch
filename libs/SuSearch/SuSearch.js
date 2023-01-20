

class SuSearch {
    constructor() {
        this.search_source = null
        this.search_string = null
        this.search_options = null
        this.search_results = null
        this.having_options = null
        this.default_options = null

        // Prepare default options
        this.prepare_default_options()
    }

    /**
     * Set search source
     * @param _src {Object}
     */
    set set_search_source(_src) {
        // Sort by name
        // _src.sort((a, b) => {
        //     if (a.Name > b.Name) return 1
        //     if (a.Name < b.Name) return -1
        //     return 0
        // })

        this.search_source = _src.sort((a, b) => a.Name - b.Name)
    }

    /**
     * Set search options
     * @param _options {Object}
     */
    set set_search_options(_options) {
        this.search_options = _options
    }

    /**
     * Set search having options
     * @param _having_options {Object}
     */
    set set_having(_having_options) {
        const allowed_operations = ['==', '===', '!=', '!==', '>', '>=', '<', '<=']

        // Go foreach having option
        _having_options.forEach(option => {
            // Check if operation is valid
            if (!allowed_operations.includes(option['operation'])) {
                console.error(`[SuSearch] The having operation (${option['operation']}) is not valid!\nValid operations are: ${allowed_operations}`)
                return 0
            }
        })

        this.having_options = _having_options
    }

    /**
     * Clear search having options
     */
    clear_having() {
        this.having_options = null
    }
    // ============================================================



    // ====================== [ Options ] =========================
    // Prepare default options
    prepare_default_options() {
        this.search_options = {
            debug: false,
            CaseSensitive: false,
            MaxNumOfSearches: 0, // Max number of searches to perform (0 for unlimited)
            KeysToSearchIn: {
                keys: [
                    // Case sensitive
                    {
                        Key: 'title',
                        MatchWord: false
                    },
                    {
                        Key: 'actors',
                        MatchWord: false
                    },
                ]
            },
            CharactersToRemove: ['(', ')', '/', '-', 'mm', 'TB', 'GB', 'tb', 'gb'],
            PercentOfPerfectScore: 90, // Get results that are at least this percent of the perfect score
            ParentDiv: 'SuSearchParent',
            NoDropDownSearchCallback: 'noDropDownSearchCallBack',

            // Search input settings
            SearchInputSettings: {
                type: 'text',
                class: 'form-control',
                id: 'SuSearchSearchInput',
                autocomplete: 'off',
                placeholder: 'Search here',
                dir: 'auto',
                style: 'display: grid; height: 50px; width: 50vw; margin: auto; text-align: center;', // Search input style
                clear_on_pick: true,
                SplitSearchStringBy: ' ',
                SearchOnlyAfterFinishTyping: {
                    State: true,
                    Timer: 250,
                }
            },

            // Build dropdown
            BuildDropdown: {
                State: true,
                HighlightSettings: {
                    State: true,
                    class: '',
                    style: 'color: red'
                },
                ItemsSettings: {
                    class: '',
                    style: 'background: transparent;',
                    Callback: null
                },
                SearchAllSettings: {
                    State: true,
                    class: 'text-danger',
                    style: '',
                    text: 'Search All Results',
                    Callback: null,
                },
                ScoreSettings: {
                    MarkBGOnHighScore: true,
                    MinHighScore: 100,
                    class: '',
                    style: 'box-shadow: 0px 0px 10px 0px #00456761;',
                },
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
            },
        }
    }

    /**
     * Receive option (Setting) and sets its values
     * @param _option {String}
     * @param _settings {Object}
     *
     * Example:
     *  _option: SearchAllSettings
     *  _settings: {
     *      State: true,
     *      text: 'Search All Results'
 *      }
     */
    set_custom_options(_option, _settings) {
        const allowed_options = ['GlobalSettings', 'KeysToSearchIn', 'ItemsSettings', 'SearchAllSettings', 'SearchInputSettings', 'BuildDropdown']

        // Check if non-valid option
        if (Object.values(allowed_options).indexOf(_option) === -1) {
            console.error(`${_option} is not a valid option\nAllowed options: ${allowed_options}`)
            return 0
        }

        // Get options based on based _option
        let wanted_option
        switch (_option) {
            case 'GlobalSettings':
                wanted_option = this.search_options
                break
            case 'KeysToSearchIn':
                wanted_option = this.search_options['KeysToSearchIn']
                break
            case 'ItemsSettings':
                wanted_option = this.search_options['BuildDropdown']['ItemsSettings']
                break
            case 'SearchAllSettings':
                wanted_option = this.search_options['BuildDropdown']['SearchAllSettings']
                break
            case 'SearchInputSettings':
                wanted_option = this.search_options['SearchInputSettings']
                break
            case 'BuildDropdown':
                wanted_option = this.search_options['BuildDropdown']
                break
        }

        // Check if settings keys are valid
        Object.keys(_settings).forEach((setting, i) => {
            if (!(setting in wanted_option)) {
                console.error(`Error, the setting [${setting}] was not found in [${_option}]`)
                return 0
            }
            else {
                // Update value
                wanted_option[setting] = _settings[setting]
            }

        })
    }
    // ============================================================



    // ======================= [ Setup ] ==========================
    setup_search_input() {
        const SearchInputSettings = this.search_options['SearchInputSettings']

        let typingTimer
        const doneTyping = () => {
            this.search()
        }

        $('<input>')
            .attr({
                type:           SearchInputSettings['type'],
                class:          SearchInputSettings['class'],
                id:             SearchInputSettings['id'],
                autocomplete:   SearchInputSettings['autocomplete'],
                placeholder:    SearchInputSettings['placeholder'],
                dir:            SearchInputSettings['dir'],
                style:          SearchInputSettings['style'],
                // clear_on_pick:  SearchInputSettings['clear_on_pick'],
            })
            .prependTo($(`#${this.search_options['ParentDiv']}`))
            .focus(() => {
                if (this.search_options['BuildDropdown']['CollapseSettings']['ExpandOnSearchInputClick']) {
                    this.show_dropdown(true)
                }
            })
            .on('keyup change update', (e) => {
                this.search_string = e.target.value
                const SearchInputSettings = this.search_options['SearchInputSettings']

                // Check if [SearchOnlyAfterFinishTyping] is enabled
                if (SearchInputSettings['SearchOnlyAfterFinishTyping']['State']) {
                    const doneTypingInterval = SearchInputSettings['SearchOnlyAfterFinishTyping']['Timer']

                    clearTimeout(typingTimer);
                    typingTimer = setTimeout(doneTyping, doneTypingInterval);
                }
                else {
                    this.search()
                }
            })
    }

    // Setup search dropdown
    setup_dropdown() {
        const $parent_div = $(`#${this.search_options['ParentDiv']}`)

        $parent_div.css('display', 'block')
        $(`#${this.search_options['ParentDiv']} ul`).remove() // Clear dropdown div

        // Add ul to div
        $('<ul>')
            .attr({
                id: 'susearch-dropdown',
                class: 'susearch-ul text-center',
                style: this.search_options['BuildDropdown']['DropDownStyle']
            })
            .appendTo($parent_div)

        const sliced_data = this.search_results.slice(0, this.search_options['BuildDropdown']['MaxNumOfResultsToShow'])

        // No data found
        if (!Object.keys(sliced_data).length) {

            // Check if no results callback is set
            if (this.search_options['BuildDropdown']['NoResultsSettings']['Callback']) {
                this.search_options['BuildDropdown']['NoResultsSettings']['Callback']()
            }

            // Add no results text
            $('<li>')
                .attr({
                    class: `susearch-item ${this.search_options['BuildDropdown']['NoResultsSettings']['class']}`,
                    style: this.search_options['BuildDropdown']['NoResultsSettings']['style'],
                    id: 'susearch-no-results'
                })
                .text(this.search_options['BuildDropdown']['NoResultsSettings']['text'])
                .appendTo($(`#susearch-dropdown`))
            return
        }

        // Data found
        else {
            // console.clear()
            // console.table(sliced_data)

            // Add search all results button if enabled
            if (this.search_options['BuildDropdown']['SearchAllSettings']['State']) {
                $(`#susearch-dropdown`).prepend(
                    $('<li>')
                        .bind('click', () => {
                            this.dropdown_search_all_clicked(sliced_data)
                        })
                        .attr({
                            class: `susearch-item susearch_search_all ${this.search_options['BuildDropdown']['SearchAllSettings']['class']}`,
                            style: this.search_options['BuildDropdown']['SearchAllSettings']['style']
                        })
                        .text(this.search_options['BuildDropdown']['SearchAllSettings']['text'])
                )
            }

            // Add li to ul
            sliced_data.forEach(item => {
                const item_value = item[this.search_options['BuildDropdown']['ItemValueAndText'][0]]
                const item_text = item[this.search_options['BuildDropdown']['ItemValueAndText'][1]]

                let item_html = item[this.search_options['BuildDropdown']['ItemValueAndText'][1]]

                // If highlight is enabled
                if (this.search_options['BuildDropdown']['HighlightSettings']['State']) {
                    item_html = this.highlight_search_words(item_html)
                }

                // If mark background on highscore is enabled
                let mark_bg = false
                const mark_bg_highscore_class = this.search_options['BuildDropdown']['ScoreSettings']['class']
                const mark_bg_highscore_style = this.search_options['BuildDropdown']['ScoreSettings']['style']
                if (this.search_options['BuildDropdown']['ScoreSettings']['MarkBGOnHighScore']) {
                    mark_bg = this.mark_bg_on_highscore(item['SEARCH_SCORE_PERCENT'])
                }

                $('<li>')
                    .attr({
                        class: `susearch-item ${this.search_options['BuildDropdown']['ItemsSettings']['class']} ${(mark_bg)? mark_bg_highscore_class : ''}`,
                        style: `${this.search_options['BuildDropdown']['ItemsSettings']['style']} ${(mark_bg)? mark_bg_highscore_style : ''}`,
                        value: item_value,
                    })
                    .html(item_html)
                    .appendTo($(`#susearch-dropdown`))
                    .click(() => {
                        this.dropdown_item_clicked(item_value, item_text, item)
                    })
            })
        }

        // Show dropdown
        this.show_dropdown(true)
    }

    // Setup search input on focus
    setup_search_input_on_focus() {
        const input_id = this.search_options['SearchInputSettings']['id']

        $(document).on('click', (e) => {
            if ($(e.target).closest(`#${input_id}`).length === 0 && $(e.target).closest(`#susearch-dropdown`).length === 0) {
                this.show_dropdown(false)
            }
        });
    }
    // ============================================================



    // ======================== [ Dropdown ] ======================
    /**
     * Function triggered when user clicks on the [Search All] button
     * @param _items {Object}
     */
    dropdown_search_all_clicked(_items) {
        // Collapse dropdown if enabled
        if (this.search_options['BuildDropdown']['CollapseSettings']['HideOnItemClick']) {
            this.show_dropdown(false)
        }

        // If clear input on item choose is enabled
        if (this.search_options['SearchInputSettings']['clear_on_pick']) {
            this.clear_input_text()
        }

        // Callback function
        this.search_options['BuildDropdown']['SearchAllSettings']['Callback'](_items)
    }

    /**
     * Function triggered when user clicks on one of the dropdown items
     * @param _item_value {String} > Item value you chose to get in dropdown settings
     * @param _item_text {String} > Item text you chose to get in dropdown settings
     * @param _item_data {Object} - Item is the full item data that user clicked on inside the dropdown
     */
    dropdown_item_clicked(_item_value, _item_text, _item_data) {
        // Collapse dropdown if enabled
        if (this.search_options['BuildDropdown']['CollapseSettings']['HideOnItemClick']) {
            this.show_dropdown(false)
        }

        // If clear input on item choose is enabled
        if (this.search_options['SearchInputSettings']['clear_on_pick']) {
            this.clear_input_text()
        }

        // Callback function
        this.search_options['BuildDropdown']['ItemsSettings']['Callback'](_item_value, _item_text, _item_data)
    }

    /**
     * Show or hide dropdown
     * @param _option {Boolean}
     */
    show_dropdown(_option) {
        const show_method = this.search_options['BuildDropdown']['CollapseSettings']['CollapseAnimation']

        // Animation
        if (show_method === 'slide') {
            if (_option) {
                $('#susearch-dropdown').slideDown()
            }
            else {
                $('#susearch-dropdown').slideUp()
            }
        }

        // Normal
        else {
            if (_option) {
                $('#susearch-dropdown').show()
            }
            else {
                $('#susearch-dropdown').hide()
            }
        }
    }
    // ============================================================

    // Initialize search
    init() {
        // Check if parent div exists
        this.parent_div_exists()

        // Setup search input
        this.setup_search_input()

        // Setup event listener
        // this.setup_event_listener()

        // Setup search input on focus
        this.setup_search_input_on_focus()
    }

    // Search
    search() {
        const matched_items = [] // Array of matched items
        const matched_indexes = [] // Store indexes of matching items

        // Convert search string into array
        if (!this.search_string) return 0
        let search_words = this.search_string.split(this.search_options['SearchInputSettings']['SplitSearchStringBy'])

        // Remove empty search words
        search_words = search_words.filter(word => word.trim() !== '')

        // Remove characters from search words
        search_words = search_words.map(word => {
            let new_word = word
            this.search_options['CharactersToRemove'].forEach(char => {
                new_word = new_word.replaceAll(char, ' ')
            })
            return new_word
        })


        // Foreach item in source
        for (let i = 0; i < this.search_source.length; i++) {
            const item = this.search_source[i]

            // Mark item as matched
            let item_matched = true

            // Check if having options are set
            if (this.having_options !== null) {
                // Check if item matches having options
                item_matched = this.does_item_match_having_options(item)
            }

            // Skip non-matched items
            if (!item_matched) continue

            let in_order_match = '' // Store score of matched words in order

            // Score the perfect match
            const perfect_match = search_words.length

            // Score item search score (The number of matching search words in all search keys)
            let item_search_score = 0

            // Go foreach search key
            for (const KeyToSearchIn of this.search_options['KeysToSearchIn']['keys']) {
                let key_value = item[KeyToSearchIn['Key']]
                const KeyToSearchIn_MatchWord = KeyToSearchIn['MatchWord']

                // Check if key found in item
                if (this.key_found_in_item(item, KeyToSearchIn)) {

                    // Check characters that need to be removed from the key's value
                    for (const char of this.search_options['CharactersToRemove']) {
                        key_value = key_value.toString().replaceAll(char, ' ')
                    }

                    // console.table(key_value)

                    // Check if search key's value contains search word
                    for (let search_word of search_words) {

                        // Check case sensitive
                        if (!this.search_options['CaseSensitive']) {
                            // Convert key's value to lower case
                            key_value = key_value.toLowerCase()

                            // Convert search word to lower case
                            search_word = search_word.toLowerCase()
                        }

                        // Check match word
                        // if (this.search_options['MatchWord'] && KeyToSearchIn_MatchWord) {
                        if (KeyToSearchIn_MatchWord) {
                            // Add spaces around key's value
                            key_value = ` ${key_value} `

                            // Add spaces around search word
                            search_word = ` ${search_word} `
                        }

                        // console.log(key_value)

                        if (key_value.includes(search_word)) {
                            // console.log(`${search_word} found in ${KeyToSearchIn}`)
                            item_search_score++
                            // Check if item index has been added to matching indexes
                            if (matched_indexes.indexOf(i) === -1) {
                                matched_indexes.push(i)
                            }

                            in_order_match += '1'
                        }
                        else {
                            // console.log(`${search_word} not found in ${KeyToSearchIn}`)
                            // if (matched_indexes.indexOf(i) !== -1) {
                            //     console.log(search_word + ' not found in ' + KeyToSearchIn)
                            //     matched_indexes.pop(i)
                            // }

                            in_order_match += '0'
                        }
                    }
                }

                 // Check if first KeyToSearchIn has been found
                if (in_order_match.includes('1')) break
            }

            // console.log(`Score ${item_search_score} from ${perfect_match}`)

            // Prevent adding items with score of zero
            if (item_search_score > 0) {

                // Check if reached the max number of searches
                if (this.search_options['MaxNumOfSearches'] === 0 || matched_items.length < this.search_options['MaxNumOfSearches']) {
                    // Calculate score with perfect match
                    const score_percent = (item_search_score / perfect_match) * 100

                    if (score_percent >= this.search_options['PercentOfPerfectScore']) {
                        matched_items.push({
                            ...item,
                            SEARCH_SCORE: item_search_score,
                            SEARCH_PERFECT_SCORE: perfect_match,
                            SEARCH_WORDS_ORDER_SCORE: in_order_match,
                            SEARCH_SCORE_PERCENT: score_percent.toFixed(2)
                        })
                    }
                }
            }

        }

        // Sort by in_order_match
        matched_items.sort((a, b) => {
            let score = -1
            if (b['SEARCH_WORDS_ORDER_SCORE'] !== undefined) {
                score = b['SEARCH_WORDS_ORDER_SCORE'].localeCompare(a['SEARCH_WORDS_ORDER_SCORE']);
            }

            let name
            try {
                name = a.Name.localeCompare(b.Name);
            }
            catch (err) {
                name = ''
            }
            // const barcode = a.Barcode.localeCompare(b.Barcode);

            // if (!a.DepartmentCode || !b.DepartmentCode) {
            //     return -1
            // }
            // const department = a.DepartmentCode.localeCompare(b.DepartmentCode);
            return score || name;
            // return score || barcode || name;
        })

        if (this.search_options['debug']) {
            console.clear()
            console.table(matched_items)
        }
        this.search_results = matched_items

        // If dropdown is enabled
        if (this.search_options['BuildDropdown']['State']) {
            // Setup dropdown
            this.setup_dropdown()
        }
        else {
            // Trigger callback function
            this.search_options['NoDropDownSearchCallback'](this.search_results)
        }

    }


    /**
     * Receive item object and check if key found in it
     * @param _item {Object}
     * @param _KeyToSearchIn {String}
     * @returns {boolean}
     */
    key_found_in_item(_item, _KeyToSearchIn) {
        for (const item_key in _item) {
            if (item_key === _KeyToSearchIn['Key']) {
                return true
            }
        }
        return false
    }

    /**
     * Receive item object and check if it matches having options
     * @param _item {Object}
     */
    does_item_match_having_options(_item) {
        // Mark item as non-matched
        let item_matched = false

        // Go foreach having option
        this.having_options.forEach(option => {
            const having_key = option['key']
            const having_operation = option['operation']
            let having_value = option['value']


            // Check if item matches having options
            // if (eval(`${_item[having_key]} ${having_operation} ${having_value.toString()}`)) {
            if (eval(`${(typeof _item[having_key] === 'string')? `'${_item[having_key]}'`: _item[having_key]} ${having_operation} ${(typeof having_value === 'string')? `'${having_value}'`: having_value}`)) {
                // If item matched the having option then mark it as matched
                item_matched = true
            }
        })

        return item_matched
    }

    /**
     * Check if parent div exists
     * @returns {boolean}
     */
    parent_div_exists() {
        const parent_div = $(`#${this.search_options['ParentDiv']}`)
        if (parent_div.length === 0) {
            console.error(`[SuSearch] Parent div not found: #${this.search_options['ParentDiv']}`)
            return false
        }
    }

    /**
     * Clear search field
     */
    clear_input_text() {
        const input_id = this.search_options['SearchInputSettings']['id']
        $(`#${input_id}`).val('')
    }

    /**
     * Receive item value and mark search words in it
     * @param _item_text {String}
     */
    highlight_search_words(_item_text) {
        // If highlight is not enabled
        if (!this.search_options['BuildDropdown']['HighlightSettings']['State']) {
            return _item_text
        }

        // Get highlight class and style settings
        const highlight_class = this.search_options['BuildDropdown']['HighlightSettings']['class']
        const highlight_style = this.search_options['BuildDropdown']['HighlightSettings']['style']

        // Convert search words into array
        let search_words = this.search_string.split(' ')

        // Regex
        const regEscape = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

        // Remove whitespace from search words
        search_words = search_words.filter(function(str) {
            return /\S/.test(str);
        })

        for (const search_word of search_words) {
            const org = _item_text // Store the current HTML state

            const val = search_word
            if (!val) return

            const pts = regEscape(val.trim()).split(/ +/)
            const reg = new RegExp("(?![^<]+>)(" + pts.join("|") + ")", "ig")
            _item_text = org.replace(reg, `<span class="${highlight_class}" style="${highlight_style}">$1</span>`)
        }

        return _item_text
    }

    /**
     * Receive item score, search perfect score and item html then mark background on high score match
     * @param _item_score_percent {float}
     */
    mark_bg_on_highscore(_item_score_percent) {
        // Get minimum highscore
        const min_score_perfect = this.search_options['BuildDropdown']['ScoreSettings']['MinHighScore']

        // Check item score percent
        if (parseFloat(_item_score_percent) >= parseFloat(min_score_perfect)) {
            return true
        }
    }
}


const SuSearchV2_C = new SuSearch()
export default SuSearchV2_C
