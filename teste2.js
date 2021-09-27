


function LongestWord(sen){

    let newString = sen.split(` `)

    let aux = `a`

    for(let i = 0; i < newString.length ; i++ ){

        if(newString[i].length > aux.length){

            aux = newString[i]

        }

    }

    console.log(aux)

}