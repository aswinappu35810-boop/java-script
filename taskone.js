let a = [5,4,3,2,1]
let iwall = a[0]
let unitwater = 0
let totalwater = 0
for(i=0;i<a.length;i++)
{
    // if(a[i]>iwall)
    // {
    //     iwall = a[i]
    // }     
        unitwater =  iwall - a[i]
        if(unitwater>0)
            {
                totalwater = unitwater + totalwater
                console.log(totalwater)
            }
}
if(totalwater<0)
{
console.log("the total UNIT OF WATER stay between walls is: "+totalwater)
}
else if(a[0]>a[a.length-1])
{
    totalwater = 0
    console.log("THE amount water is: "+totalwater)

}
else
{
    console.log("THE amount water is: "+totalwater)
}