let m=2000;
let n=Number(prompt("Mebleg"));
let operator=prompt("operator");
function inCome (m,n){
    return m+n;
}
function expense (m,n){
    return m-n;
}

function operating(m,n,operator)
{
 switch(operator){
    case "+":
        console.log("Income :"+inCome(m,n));
        break;
    case "-":
        console.log("Expense" +expense(m,n));
        break;
    default:
        console.log("Operation is incorrect");
        break;
   }
}

operating (m,n, operator);