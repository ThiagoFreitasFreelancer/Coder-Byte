



function SearchingChallenge(str){

    let openParent = 0
    let closeParent = 0

    for(let i = 0; i < str.length ; i++){

        if(str[i] == `[` || str[i] == `(` || str[i] == `{`){

            openParent++

        }else if(str[i] == `]` || str[i] == `)` || str[i] == `}`){

            closeParent++

        }

    }

    if(closeParent == openParent){
        return console.log(1, openParent)
    }

    console.log(0)

}