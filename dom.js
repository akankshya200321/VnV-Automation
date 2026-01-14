const a= document.getElementById("company")
a.innerText = "<h1>Capgemini is an MNC"     //inner html

a.textContent = "Capgemini Pune Branch"  //dynamically changing from apple to this , using innertext html

var aa= document.getElementsByClassName("revenue");
aa.innerHTML="<h1>Budget</h1>"

const aa = document.getElementsByClassName("revenue")[0]//SO MANY RENUES ARE MENTIONED SO THATS WHY WE ARE P[OINTING THE RENUE ON THE 0 INDEX...
aa.innerHTML="<h1>Budget</h1>"



const ab= document.getElementsByTagName("p")[0]
ab.textContent="We are the testers"
ab.innerHTML = "<h1>We are employees"



const ab=  document.getElementsByTagName("p")
for(let i=0; i<ab.length;i++){
    ab[i].textContent="CHANGED PARAGRAPH"}


 const bc= document.querySelector("#company")
 bc.textContent="wipro"

 const ad= document.querySelector(".nav-left") // class name under assignment 
 ad.textContent="infosys! !" 
 

const abd = document.querySelector("div")
abd.textContent="HLC !!"

const qwq=document.querySelectorAll(".revenue")
for(let i=0;i<qwq.length;i++){
    qwq.textContent = "LTI"
}