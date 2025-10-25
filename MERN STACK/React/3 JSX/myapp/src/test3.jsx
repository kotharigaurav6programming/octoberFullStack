const  num = parseInt(prompt("Enter number : "));
var str = '';
for(var i=1;i<=10;i++){
    str+= num+" x "+i+" = "+(num*i)+"\n";
}
const result = <span>{alert(str)}</span>
export default result;