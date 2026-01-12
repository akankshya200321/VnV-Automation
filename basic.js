let fruit="mango"// can be changed later
const isfruit= true //cant be changed
var number=1// is a global variable

console.log("wlcome to js basics") //printing statement

console.log("type of fruit ",fruit," is ",typeof fruit)
console.log("type of isfruit is",typeof isfruit)
console.log("type of number ",number," is ",typeof number)
//arithmatic operation
let a=5
let b=6

console.log("a + b = ", a+b);
console.log("a - b = ", a-b);
console.log("a * b = ", a*b);
console.log("a / b = ", a/b);
console.log("a % b = ", a%b);

//0BJECTS

const product={
    ptype:"pen",
    price: 500,
    discount:5,
    rating:4.2,
}

console.log(product);

//conditional statements

let num= 25
if(num%2==0)
{console.log("its a even number")

}
else{
    console.log("its an odd number")
}

let season=prompt("enter a season")
 switch(season){
    case "summer":
        console.log("aghhhh!! its so hot outside");
        break;
    case "autum":
        console.log("its the season of fall");
        break;
    case "rainy":
        console.log("ohh sad its raining outside");
        break;
    case "spring":
        console.log("its a pleasant weather");
        break;
    default: console.log("invalid season")
 }

