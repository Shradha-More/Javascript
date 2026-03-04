// for each

// Executes a function for each array element.
// OR using arrow function

const coding = ['js', 'ruby', 'java', 'python', 'cpp']

coding.forEach( function (val) {
    console.log(val)
} )   // callback function does not have name

coding.forEach( (item) => {
    console.log(item)
})

function printMe(item){
    console.log(item)
}

coding.forEach(printMe)

coding.forEach( (item, index, arrList)=> {
    console.log(item, index, arrList)
})

const myCoding = [
    {
        languageName: 'javascript',
        languageFileName: 'js'
    },
    {
        languageName: 'python',
        languageFileName: 'py'
    },
    {
        languageName: 'java',
        languageFileName: 'java'
    }
]

myCoding.forEach( (item)=> {
    console.log(item.languageName)
})