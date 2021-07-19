console.log('Hello World')
let name = 'Sue'
console.log(name)
let age = 18
console.log(age)

// arrays start with index number
let people = ['Marty', 'Anais', 'Jonathan', 'Andrew']
console.log(people)
let ages = [4,5,9,2]
console.log(ages)
console.log(people[1])

// objects
let person1  = {
    name: 'Anais',
    status: 'bootcamper',
    hobby: 'cooking',
    code: function() {console.log('develop website')}
}

let person2 = {
    name: 'Marty',
    status: 'instructor',
    hobby: 'snowboarding',
    code: function() {console.log('develop website')}
}

let person3  = {
    name: 'Johnathan',
    status: 'bootcamper',
    hobby: 'hiking',
    code: function() {console.log('develop website')}
}

let person4  = {
    name: 'Andrew',
    status: 'bootcamper',
    hobby: 'boardgames',
    code: function() {console.log('develop website')}
}

let bootcamp = [person1, person2, person3, person4]
console.log(bootcamp[2])
console.log(bootcamp[2].hobby)

console.log(bootcamp[2].name + ' likes ' + bootcamp[2].hobby)