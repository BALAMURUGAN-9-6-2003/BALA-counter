var element=document.querySelector(".count").innerText
var defualt=0
function increment()
{
    defualt++
    document.querySelector(".count").innerText=defualt
    console.log(defualt)
}
function reset()
{
    defualt=0
    document.querySelector(".count").innerText=defualt

}