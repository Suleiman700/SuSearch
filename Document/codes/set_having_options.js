// Search customers that their age is bigger than 35
SuSearch.set_having = [
    {
        key: 'age',
        operation: '>',
        value: '35'
    },
]

// Search customers that their age is smaller/equal to 30 and is female
SuSearch.set_having = [
    {
        key: 'age',
        operation: '<=',
        value: '30'
    },
    {
        key: 'type',
        operation: '===',
        value: 'female'
    }
]
