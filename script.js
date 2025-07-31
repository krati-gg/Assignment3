

function onClickFunction_Red()
{
   // console.log("Script Ready")
    document.getElementById("box-1").style.backgroundColor="red";
    document.getElementById("box-1").style.color="white";
}
function onClickFunction_Blue()
{
    document.getElementById("box-2").style.backgroundColor="blue";
    document.getElementById("box-2").style.color="white";
}
function onClickFunction_Green()
{
    document.getElementById("box-3").style.backgroundColor="green";
    document.getElementById("box-3").style.color="white";
}
function onClickFunction_Yellow()
{
    document.getElementById("box-4").style.backgroundColor="yellow";
    document.getElementById("box-4").style.color="white";
}
function btnUserName_onclick(){
    console.log( document.getElementById("txtUsername").value)
    //document.getElementById("custName").innerHTML= "ABC"
    document.getElementById("custName").innerText = ", " + document.getElementById("txtUsername").value ;
}