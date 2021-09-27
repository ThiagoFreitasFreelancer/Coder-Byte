

function ArrayChallenge(arr){

    let aux = 0
    let valeu = -1
    let number = 0

    for(let i = 0; i < arr.length ; i++ ){

        for(let x = 0; x < arr.length ; x++){
            if(arr[i] == arr[x]){
                valeu++                
            }
        }
        if(valeu > aux){
            aux = valeu
            number = arr[i]
        }
        valeu = 0

    }

    if(aux > 1){
        console.log(number)
    }else{
        console.log(`-1`)
    }

}