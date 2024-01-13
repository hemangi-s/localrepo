//calculateArithmetic
function calculateArithmetic(a, b, arithmeticFinalFunction){
    if(type == "sum"){
        const value = sum(a, b)
        return value;
    }
    if(type == "minus"){
        const value = sub(a, b)
        return value;
    }
}

function sum(a,b){
    return a+b;
}

function minus(a,b){
    return a-b;
}

const value = calculateArithmetic(1, 2, "minus");

// code has error