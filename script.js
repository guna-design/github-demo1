//1=> Print odd numbers in array

var a=+userInput[0];
var b=[];
for(var i=1;i<=a;i++)
{
    if (i%2!=0){
        b.push(i);
    }
 }
console.log(b);

//2=>Convert all the strings to title caps in a string array 

let a= userInput[0].split(" ");
for (let i = 0; i < a.length; i++) {
  let firstLetter = a[i].charAt(0).toUpperCase();
  a[i] = firstLetter + a[i].slice(1);
}
console.log(a.join(" "));

