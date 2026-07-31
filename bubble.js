let temp = 0
let a = [64,34,25,12,22,11,90]
for(i=0; i<a.length; i++)
{
    for(j=1; j<a.length; j++)
    {
        if(a[j-1]>a[j])
        {
            temp=a[j-1]
            a[j-1]=a[j]
            a[j]=temp

        }
    }
}

console.log(a)