let a = [1,2,3,10,20]
let starti = 0
let lasti = 0
let count = 1
let leng = 0
let x = 0
for(i=0; i<a.length ;i++)
{
   if(a[i]<a[i+1])
   {
    count++
    if(leng<count)
        {
            leng = count
            starti = x
            lasti = i+1
        }
   }
   else
   {
    count = 1
    x = i+1
   }
}
console.log(leng,starti,lasti)