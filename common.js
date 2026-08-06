let a = [1,3,4,5]
let b = [1,1,2,3]
let unique = 0
let common = 0
let found = false
for(i=0;i<a.length;i++)
{
    x = a[i]
    for(j=0;j<b.length;j++)
    {
            if(a[i]==b[j])
            {
                common=a[i]
                found=true
                console.log(common)
                break
            }
    }
}
if(!found)  
{
    console.log("there is no common element present");
}
