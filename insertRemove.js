var num4 = [20, 21, 22, 23, 37, 40, 60, 80, 100]

num4.push(101) // try to add new data in the last stage
num4.unshift(19) //trying to add new data at the first stage

num4.pop() //trying to delete data from the last
num4.shift() //trying to delete data from the beginning

num4.splice(2, 0, 32) //insert new data without replacing
num4.splice(2, 1) //trying to delete a specific index


console.log(num4)