let a = [1,1,1,2,3,2,2,2,3,3]
let x = 0
let count = 0
let max = 0
let  y = 0
// let found = false
for(i=0; i<a.length; i++)
{
   count = 0
    for(j=0;j<a.length;j++)
        {
            if(a[i]==a[j])
            {
                count++
                // found = true
            }
        }
        if(count>max)
        {
            max = count
            y = a[i]
        }

}
if(max==1)
{
    console.log(a[0]+" Appears: "+max+" times")
}
else if(max == 0)
{
    console.log("the array is empty")
}
else
{
    console.log(y+" Appears: "+max+" times")
}