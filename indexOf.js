function indexOf(arr, item) {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element === item){
            return i
        }
    }
    return -1
}

const items = [
    'Bicycle',
    'Lego',
    'Doll',
    'Teddybear',
    'Crayons',
    'Fishing rod'
]

console.log(indexOf(items, 'Lego'))         // Should be 1
console.log(indexOf(items, 'Teddybear'))    // Should be 3
console.log(indexOf(items, 'Laser sword'))  // Should be -1
console.log(indexOf(items, 'Playstation'))  // Should be -1

// ------------------

console.log(items.indexOf('Lego'))         // Should be 1
console.log(items.indexOf('Teddybear'))    // Should be 3
console.log(items.indexOf('Laser sword'))  // Should be -1
console.log(items.indexOf('Playstation'))  // Should be -1
