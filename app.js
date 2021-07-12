var button=document.querySelector("#translate")
var inp=document.querySelector("#text-input")
var out=document.querySelector("#text-output")

console.log("button is",button);
console.log("inp is",inp.value);

var url="https://api.funtranslations.com/translate/minion.json";

function serveurl(text)
{
    return url+"?"+"text="+text;
}


function errorHandler(error)
{
    console.log("error is",error);
}


function clickfunc()    
{
    // var url="https://api.funtranslations.com/translate/minion.json"+"?"+"text="+inp.value;

    fetch(serveurl(inp.value))
    .then(r=>r.json())
    .then(js=>{
        var transText=js.contents.translated;
        out.innerText=transText;
        console.log("Output is",out.value,transText);

    })
    .catch(errorHandler)
    // out.innerText="HIHIHI  "+inp.value
    console.log(url);
    console.log("Button is clicked ");
    console.log("inp is24",inp.value);

}

button.addEventListener("click",clickfunc)

console.log("inp is28",inp.value);
// console.log("in2p is",inp);

