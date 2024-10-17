class calculator{
    a: number;
    b: number;

    constructor(a: number, b: number){
        this.a = a;
        this.b = b;
    }
}

function add(a: number, b:number): number{
    const sum = a+b;
    return sum;
}

function sub(a: number, b: number){
    const res = a-b;
    return res;
}

function mul(a: number, b: number){
    const pro = a*b;
    return pro;
}

function div(a: number ,b: number){
    const rem = a/b;
    return rem;
}

const sum = add(1 ,3);
const subt = sub(5, 3);
const pro = mul(5 ,5);
const rem = div(10, 2);

console.log(`The sum of 1 and 3 is: ${sum} `);
console.log(`The subtraction of 5 and 3 is: ${subt} `);
console.log(`The product of 5 and 5 is: ${pro} `);
console.log(`The quotient when 2 divides 10 is: ${rem} `);


