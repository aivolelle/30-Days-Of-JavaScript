// this is your main.js script


// Exercise 1

let firstName = 'Mark'
let lastName = 'Potter'
let country = 'Poland'
let age = 45
let isMarried = false
let year = 2024

console.log(typeof(firstName))
console.log(typeof(lastName))
console.log(typeof(country))
console.log(typeof(age))
console.log(typeof(isMarried))
console.log(typeof(year))

let a = '10'
let b = 10
console.log(a == b)

console.log(parseInt('9.8') == b)

console.log(1 == 1)
console.log(4 !== '4')

let c = 'python'
let d = 'jargon'
console.log(c.length != d.length)

console.log(!(4 > 3 || 10 < 12))

let today = new Date()
console.log(today.getFullYear())
console.log(today.getMonth())
console.log(today.getDate())
console.log(today.getDay())
console.log(today.getHours())
console.log(today.getMinutes())
console.log(today.getTime())

// Exercise 2

//let base = prompt('Base','20')
//let height = prompt('Hight','10')
//let area = (base * height) / 2
//alert(`Area of triagnle is ${area}`)

//let aa = prompt('a',5)
//let bb = prompt('b',4)
//let cc = prompt('c',3)
//let p = parseInt(aa) + parseInt(bb) + parseInt(cc)
//console.log(typeof(p))
//alert(`Perimeter of triagnle is ${p}`)

const now = new Date()
let y = now.getFullYear() // return year
let month = now.getMonth() + 1 // return month(0 - 11)
let date = now.getDate() // return date (1 - 31)
let hours = now.getHours() // return number (0 - 23)
let minutes = now.getMinutes() // return number (0 -59)

if (month < 10) month = '0' + month;
if (date < 10) date = '0' + date;
if (hours < 10) hours = '0' + hours;
if (minutes < 10) minutes = '0' + minutes;

console.log(`${date}/${month}/${y} ${hours}:${minutes}`) // 4/1/2020 0:56
console.log(`${y}-${month}-${date} ${hours}:${minutes}`)
