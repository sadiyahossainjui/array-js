var nums = [20, 22, 23, 24, 26]

for (var i = 0; i < nums.length; i++) {
    //console.log(nums[i])
    nums[i] = nums[i] + 2 //if we need to update the value


}

console.log(nums);




//if we need to get total summation of data

var num2 = [10, 20, 30, 40]
var sum = 0

for (var i = 0; i < num2.length; i++) {
    sum += num2[i]
}
console.log(sum);



//how to print only even number

var num3 = [20, 21, 22, 23, 37, 40, 60, 80, 100]
for (var i = 0; i < num3.length; i++) {
    if (num3[i] % 2 == 0) {
        console.log("print" + ' ' + num3[i])
    }
}


//how to print odd number only

var num4 = [20, 21, 22, 23, 37, 40, 60, 80, 100]

for (var i = 0; i < num4.length; i++) {
    if (num4[i] % 2 == 1) {
        console.log('print odd number only' + ' ' + num4[i])
    }
}


//only summetion of even number

var num5 = [20, 21, 22, 23, 37, 40, 60, 80, 100]
var sum = 0

for (var i = 0; i < num5.length; i++) {
    if (num5[i] % 2 == 0) {
        sum += num5[i]
    }
}
console.log(sum)