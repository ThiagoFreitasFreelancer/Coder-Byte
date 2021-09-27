

function StringChallenge(str){

    let newString = str.split('').reverse().join('')
    
    newString = newString.replace(/\s/g, '')
    str = str.replace(/\s/g, '')

    str == newString ? console.log(`true`) : console.log(`false`)

}