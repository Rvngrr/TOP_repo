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

export function operation(x,operation,y){

    if (typeof x !== "number" || typeof y !== "number") {
        return "Error, Please input a number!"
    }

    switch(operation){
        case '+':
            return addition(x,y);
            
        case '-':
            return subtraction(x,y);
            
        case 'x':
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

