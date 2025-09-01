// reverse
// const arr=[45,5,3,6] //
// console.log(arr.reverse())
// console.log(arr)

// sort
// console.log(arr.sort()) //we cannot sort numbers,we can sort string
// console.log(arr)    // if we sort the numbers array,only sort 1st element
// arr.sort((a,b)=>a-b)
//  console.log(arr)     //sort number
// a=arr.reverse()   //reverse sorted list
// console.log(a)

//slicing
// new_arr=arr.slice(1,2)
// console.log(new_arr)


//push -.add to last
// arr.push(1)
// console.log(arr)

// //pop->remove from end
// arr.pop()
// console.log(arr)

// //shif ->remove from 1st
// arr.shift()
// console.log(arr)

// //unshift ->add at 1st
// arr.unshift(0)
// console.log(arr)

// //splice ->remove/replace/add (modifies original)
// arr.splice(2,0,"hi")
// console.log(arr)

//map ->create  new array
// const arr=[5,5,3,6]
// let sqr=arr.map(n=>n*n)
// console.log(sqr)

//filter → only elements that pass condition
// const arr=[5,5,3,6]
// let evn=arr.filter(n=>n%2==0)
// console.log(evn)

//reduce
// const arr=[5,5,3,6]
// let evn=arr.reduce((a,b)=>a+b,0)
// console.log(evn)

//factorial->reduce
const arr=[1,2,3,4,5]
let evn=arr.reduce((a,b)=>a*b,1)
console.log(evn)


//forach
let w=["python",1,4,3,"jamshi"]
w.forEach(function display(s,index){
    console.log(`${index} postion =${s}`)
})
 





