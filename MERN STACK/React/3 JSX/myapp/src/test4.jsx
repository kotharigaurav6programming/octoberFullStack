const  num = parseInt(prompt("Enter number : "));
var str = [];
for(var i=1;i<=10;i++){
    str.push(num+" x "+i+" = "+(num*i));
}
const res1 = str.map((line,index)=>{
    return  <div>{line}</div>
});
const result = <span>{res1}</span>
export default result;