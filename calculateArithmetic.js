//calulateArithmetic
function calulateArithmetic(a, b, type){
    if(type == "sum"){
        const value = sum(a,b)
        return value;
    }
    if(type == "minus"){
        const value = sub(a,b)
        return value;
    }
}

function sum(a,b){
    return a+b;
}

function minus(a,b){
    return a-b;
}

const value = calulateArithmetic(1, 2, "minus");