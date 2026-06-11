let num;
for(let i = 1; i <=5; i++ ){
    let str = "";
    num = i;
    for(let j = 1; j<= i; j++){
        str += num;
        str += " ";
        num = 10 - num;
    }
    //spaces
    for(let k = 1; k <= 10 - (2*i); k++){
        str += "  ";
    }
    if(i %2 == 0){
        num = 10 - num;
    }
    for(let j = 1; j<= i; j++){
        
        str += num;
        str += " ";
        num = 10 - num;
    }
    console.log(str);
}
for(let i = 4; i >= 1; i-- ){
    let str = "";
    num = i;
    for(let j = 1; j<= i; j++){
        num = 10 - num;
        str += num;
        str += " ";   
    }
    for(let k = 1; k <= 10 - (2*i); k++){
        str += "  ";
    }
    if(i %2 == 0){
        num = 10 - num;
    }
    for(let j = 1; j<= i; j++){
        num = 10 - num;
        str += num;
        str += " ";
        
    }
    console.log(str);
}