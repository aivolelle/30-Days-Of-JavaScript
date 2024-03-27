// this is your main.js script

// Exercise level 1
console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substring(0,2))
console.log(challenge.substring(3,challenge.length))
console.log(challenge.includes('Script'))
console.log(challenge.split(' '))

let a = challenge.split(' ')
console.log(a[0])

let b = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
let bb = b.split(', ')
console.log(bb[1])

console.log(challenge.replace('JavaScript','Python'))
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt('J'))
console.log(challenge.indexOf('a'))
console.log(challenge.lastIndexOf('a'))

c = 'You cannot end a sentence with because because because is a conjunction'
console.log(c.indexOf('because'))
console.log(c.lastIndexOf('because'))
console.log(c.search('because'))

d = ' 30 Days Of JavaScript '
console.log(d.trim())

console.log(challenge.startsWith('30'))
console.log(challenge.endsWith('Script'))
console.log(challenge.match('a'))

let e = '30 Days of'
console.log(e.concat(' JavaScript'))
console.log(e.repeat(5))

//Exercise Level 2

console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.')
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")

console.log(Number('10'))
console.log(Math.ceil(9.8))

x = ['python','jargon']
console.log(x[0].search('on'))
console.log(x[1].search('on'))

xx = 'I hope this course is not full of jargon.'
console.log(xx.search('jargon'))

console.log(Math.floor(Math.random()*101))
//console.log(Math.floor(Math.random()*101))
console.log(Math.floor(Math.random()*256))

let str = 'JavaScript'
let num = Math.floor(Math.random()*str.length+1)
console.log(num)
console.log(str.charAt(num))

console.log('1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125')

let y = 'You cannot end a sentence with because because because is a conjunction'
console.log(y.replace('because because because ',''))

// Exercise level 3

let text = 'Love is the best thing in this world. Some found their love and some are still looking for their love.' 
ww = 'love'

let re = new RegExp(`\\b${ww}\\b`, 'gi');
console.log(text.match(re));

//let pattern = /\ww/gi
//let pattern = /love/gi
//console.log(text.match(pattern))

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

console.log(sentence.replace(/%|@|&|#|\$|;/gi,''))

let cleanText = sentence.replace(/%|@|&|#|\$|;|,|\./gi,'')

console.log(cleanText.search())

let words = cleanText.split(' ')
// Extract unique words
const uniqueWords = new Set(words);
let m = 0
let w = []
let t = new Object()

uniqueWords.forEach((word) => {
    re = new RegExp(`\\b${word}\\b`, 'gi');
    t = cleanText.match(re)

    if (m <= t.length) { 
        w.push(word)
        m = t.length
    }
    console.log(t.length)

});

console.log(w)


centence = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month'

let salary = 0;
let parts = centence.split(',')

const paymentParts = new Set(parts);
paymentParts.forEach((part) => {
    part = part.trim();
    splittedWords = part.split(' ');

    const paymentSection = new Set(splittedWords)
    paymentSection.forEach((paymentWord) => {
        if (Number(paymentWord) > 0) {
            x = Number(paymentWord)
        }
    }); 

    if (part.includes('per month')) {
        x = x * 12
    };
    salary = salary + x;
    
});

console.log(centence)
console.log('Annual salary : ' + salary)