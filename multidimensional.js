//how to declare multidimensional array

var num4 = [
        [20, 21, 22, 23, 37, 40, 60, 80, 100],
        [30, 40, 50, 80, 75, 90, 86],
        [75, 79, 78, 79, 65, 56, 34]

    ]
    // console.log(num4[0][0])
    // console.log(num4[2][3])

for (var i = 0; i < num4.length; i++) {
    for (var j = 0; j < num4[i].length; j++) {
        console.log('Element' + ' ' + i + ':' + num4[i][j])
    }
}