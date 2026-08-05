let notes=[500,200,100,50] 
let quantity=[2,3,5,10]
let fund = parseInt(prompt("Enter the fund needed to be withdraw"))
let x = 0 
let y = 0 
let remainingfund = 0
let remainingnote = 0

for(i=0;i<notes.length;i++)
{
    x = Math.floor(fund/notes[i])
    y = fund % notes[i]
    for(j=0;j<quantity.length;j++)
    {
        if(quantity[j]>=x)
        {
            quantity[j]=quantity[j]-x
            remainingnote = x
            remainingfund =fund-(notes[i]*y)
        }
        else
        {
            j = 0
            remainingnote = quantity[j]
            remainingfund = fund-(notes[i]*j)
        }
    }

}