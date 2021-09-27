function MathChallenge(num){

    let result = 0
    let fn = 0
    let fn1 = 1
    let aux = 0

    if(num == 1){

        return console.log(`yes`)

    }else if(num == 0){
        
        return console.log(`yes`)

    }

    while(fn < num || fn == num){

        fn = aux + fn1
        aux = fn1
        fn1 = fn
    }

    if(aux == num){
        console.log(`yes`)
    }else{
        console.log(`no`)
    }

}