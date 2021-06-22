var button=document.querySelector("#translate")
var inp=document.querySelector("#text-input")
var out=document.querySelector("#text-output")

console.log("button is",button);

function clickfunc()
{
    out.innerText="HIHIHI  "+inp.value
    console.log("Button is clicked ");
}
button.addEventListener("click",clickfunc)

// console.log("inp is",inp.value);
// console.log("in2p is",inp);

