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

//3=>Sum of all numbers in an array  
var m=[1,2,3,4,5];
var sum=0;
for (i=0;i<m.length;i++)
{
  sum=sum+(+m[i]);
}
console.log(sum);

//4=>Return all the palindromes in an array 

var a = ['paper','noon','dad','mom','civic','not'];
var b = a.filter((word) => {
  var len = word.length;
  for (var i = 0; i < len / 2; i++) {
    if (word[i] !== word[len - 1 - i]) {
      return false;
    }
  }
  return true;
});
console.log(b);
