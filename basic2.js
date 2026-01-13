//FUNCTIONS
let count=0;
function numOfVowel(str){
    str=str.toLowerCase()
    for(let el of str){
        if(el==="a"||el==="e"||el==="i"||el==="o"||el==="u"){
            count+=1
        }
    }
    return count;
}

let strVal=prompt("enter a string")
console.log("number of vowels in the string ",strVal," = ",numOfVowel(strVal))

//ARROW FUNCTIONS

let mul= (a,b)=>{
    val=a*b;
    return val;
}

console.log("product of 345 and 129 is",mul(345,129));

//LOOPS
//1.for loop
let number=prompt("enter the number for multiplication tables")
for(let i=1;i<=10;i++){
    console.log(number," X", i," = ",number*i)
}

//2.while
let correct=234;
let input=prompt("enter a desired number")
while(input!=correct){
 input=prompt("no enter another number")
}
console.log("congrats its a correct guess")

//3.do while
console.log("enter the name of 5 students")
let Sname=[]
let j=0
do{
    let nameInput=prompt("enter the names of students")
    Sname.push(nameInput)
    j++   
}while(j<5) 
console.log(Sname);


//ARRAY
let strangerThings=["mike","lucas","dustin","will"]
console.log("main cast of stranget things are:", strangerThings)
console.log("Someone was taken to upside down!!! Gosh its ",strangerThings.pop())//pop
console.log("remaining are:",strangerThings)
console.log("a new stranger joined the squad and she has SUPERPOWERS she is:")
strangerThings.push("eleven")//push
console.log(strangerThings)
console.log("yay will was saved!! but el went into hiding")
strangerThings.unshift("will")//unshift 
strangerThings.pop()//pop
console.log(strangerThings)
console.log("new season another girl is in the squad ")
strangerThings.unshift("max")//unshift
console.log("new squad is:", strangerThings)
console.log("everyone is fighting with the monsters and guess who is back. its ELEVEN!!")
strangerThings.push("eleven")//push
console.log("Atlast everyone is together ",strangerThings)
let newsquad=["steve","jonathan","nancy"]
console.log("a new squad is formed with new characters:")
console.log(newsquad)
console.log("new squad is:")
strangerThings=strangerThings.concat(newsquad)//concat
console.log(strangerThings)
let str=strangerThings.slice(0,6)//slice
console.log(" but the first squad ",str," are kids")
strangerThings.splice(0,6,"robin")//splics
console.log(strangerThings,"are also teens but are older than the rest ")
console.log(strangerThings[0],"is their new friend")
strangerThings.splice(0,0,"max", "will", "mike", "lucas", "dustin", "eleven","joyce","hopper","bauman")//splice
console.log("so the total characters fighting the monsters are:", strangerThings)
console.log("and total number of main characters are: ",strangerThings.length)

//STRINGS
let message="welcome to javascript"
console.log("the length of the meggage is: ",message.length);
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.charAt(0));
console.log(message.replace("welcome","hello"));
console.log(message.slice(0,5)),
console.log(message.concat("in vscode"));


