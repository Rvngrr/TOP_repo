function addition(x,y){
    return x + y;
}

function subtraction(x,y){
    return x - y;
}

function multiplication(x,y){
    return x*y;
}

function Division(x,y){
    return x/y;
}

function operation(x,operation,y){

    if(typeof x !== "number" && typeof x !== "number"){
        return "Error, Please input a letter!"
    }

    switch(operation){
        case '+':
            return addition(x,y);
            
        case '-':
            return subtraction(x,y);
            
        case '*':
            return multiplication(x,y);
            
        case '/':
            return Division(x,y);

        default:
            return `Choose among these operations:
    - "+" addition
    - "-" subtraction
    - "*" multiplication
    - "/" division`
    }
}

console.log(operation(1, '', 2))

