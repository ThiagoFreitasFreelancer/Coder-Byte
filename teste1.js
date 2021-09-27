

function ArrayChallenge(strArr){

    frase0 = strArr[0]
    frase1 = strArr[1]

    frase0 = frase0.split(`,`)
    frase1 = frase1.split(`,`)

    frase0 = BreakString(frase0)
    frase1 = BreakString(frase1)

    let result = [] 

    //leng = frase0.length > frase1.length ? frase0.length : frase1.length

    for(let i = 0; i < frase0.length ; i++){
        
        for(let x = 0; x < frase1.length ; x++){

            frase0[i] == frase1[x] ? result.push(frase0[i]) : false

        }

    }

    console.log(result)

}

function BreakString(strArray){

    let arrayNew = []
    for(let i = 0; i < strArray.length ; i++){

        arrayNew.push(parseInt(strArray[i]))

    }

    return arrayNew

}