//if we need to search data then we can follow this method

var num4 = [20, 21, 22, 23, 37, 40, 60, 80, 100]
var find = 21
var isFound = false

for (var i = 0; i < num4.length; i++) {
    if (num4[i] == find) {
        console.log('Data found in index' + ' ' + i)
        isFound = true
        break;

    }
}

if (!isFound) {
    console.log('Data not found')
}