console.log(countries)
//alert('Open the browser console whenever you work on JavaScript')
//alert('Open the console and check if the countries has been loaded')

//let companiesString1 = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
//const companies = companiesString1.split(',')
//console.log(companies) 

const numbers = [1, 2, 3, 4, 5]
numbers.splice(0,1)
console.log(numbers)  
console.log(numbers[numbers.length-1])

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let text1 = text.replace(/,|\.|/gi,'')
let words = text1.split(' ')
console.log(words)
console.log(words.length)

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat')
shoppingCart.push('Meat')
i = shoppingCart.indexOf('Honey') 
shoppingCart.splice(i,1)

i = shoppingCart.indexOf('Tea') 
shoppingCart[i] = 'Green Tea'
console.log(shoppingCart)


if (countries.indexOf('Ethiopia') > 0) {
    console.log('ETHIOPIA')
}else{
    countries.push('Ethiopia')
}

if (webTechs.indexOf('Sass') > 0) {
    webTechs.log('Sass is a CSS preprocess')
}else{
    webTechs.push('Sass')
}

console.log(webTechs)

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 25]

ages.sort()
console.log('Min:' + ages[0] + ' Max:' + ages[ages.length-1])

let median = 0

//console.log(ages.length % 2)

if (ages.length % 2 == 0){
    i = ages.length / 2
    console.log((ages[i]+ages[i+1])/2)
}else{
    i = parseInt(ages.length / 2)
    console.log(ages[i])
    console.log(i)
}

