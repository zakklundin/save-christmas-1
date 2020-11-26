
function map(arr, func) {
    // skapa en ny tom array av samma längd som arr
    // för varje element i arr
    //      newArray[j] = func(arr[j])
    // returnera den nya arrayen
    let newArray = []
    newArray = arr.map(func)
    return newArray
}

// Test 1
console.log('\nTEST 1')
const numberArray = [10, 50, 100]
const newNumberArray = map(numberArray, x => x + 5)
console.log(newNumberArray) // [15, 55, 105]
console.log(numberArray)    // [10, 50, 100] 

// Test 2
console.log('\nTEST 2')
const stringArray = ['boll', 'häst', 'flygplan']
const newStringArray = map(stringArray, str => str.toUpperCase())
console.log(newStringArray) // ['BOLL', 'HÄST', 'FLYGPLAN']
console.log(stringArray)    // ['boll', 'häst', 'flygplan']

// Test 3 - GÖR ETT EGET TEST HÄR
console.log('\nTEST 3')
const numberStringArray = ['5', '7', '9']
const normalNumberArray = map(numberStringArray, n => parseInt(n))
console.log(numberStringArray)
console.log(normalNumberArray)