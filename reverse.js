//how to reverse array using logic

var num4 = [20, 21, 22, 23, 37, 40, 60, 80, 100]

for (var i = 0; i < (num4.length / 2); i++) {
    var temp = num4[i]
    num4[i] = num4[num4.length - 1 - i]
    num4[num4.length - 1 - i] = temp;

}
console.log(num4)

//how to reverse array using js method
var num4 = [20, 21, 22, 23, 37, 40, 60, 80, 100]
console.log(num4.reverse())