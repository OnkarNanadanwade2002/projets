//this function clear all values
function clearScreen()
{
    document.getElementById("result").value= " ";
}


//this function display values
function display(value)
{
    document.getElementById("result").value+=value;
}


//this function evaluates the expression return result
function claculate()
{
    let p=document.getElementById("result").value;
    console.log(p);
    let q=math.evaluate(p);
    document.getElementById("result").value=q;
    display(q);B
}
