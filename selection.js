let a= [29,10,14,37,13]
console.log("before array: "+a)
let small = 0
let position = 0
let x = 0
let temp = 0
for(i=0; i<a.length; i++)
{
x = a[i]
position = i
for(j=i+1 ; j<a.length; j++)
{
    if(x>a[j])
    {
        x = a[j]
        position = j
    }

}
temp = a[i]
a[i] = a[position]
a[position] = temp


}


console.log("after array: "+a)