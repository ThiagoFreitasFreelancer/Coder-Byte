


function PlusMinus(num){

    let vet = []
    let rest = 1
    aux = 10000
    n = 10

    while(rest > 0){

        rest = num % (n * 10)
        num = num - rest

        console.log(rest)


    }

    console.log(vet)

}