let notes=[500,200,100,50] 
let quantity=[2,3,5,10]
let fund = parseInt(prompt("Enter the fund needed to be withdraw"))
let x = 0 
let found = false
let remainingfund = 0
let remainingnote = 0

for(i=0;i<notes.length && i<quantity.length;i++){
    
    console.log("Initial quantity"+notes[i]+"-->"+quantity[i])
}

for(var i=0;i<notes.length && i<quantity.length;i++)
{
    x = Math.floor(fund/notes[i])

    if(quantity[i]>=x)
        {
            quantity[i]=quantity[i]-x
            remainingnote = x
            fund =fund-(notes[i]*remainingnote)
            // console.log("Remaining quantity"+notes[i]+"-->"+quantity[i])
        }
    else
        {
            remainingnote = quantity[i]
            fund = fund-(notes[i]*remainingnote)
            quantity[i] = 0
        }
    if(remainingnote>0)
    {
        console.log("Dispensed Notes: " + notes[i] + " x " + remainingnote)
    }
        console.log("Remaining quantity: "+notes[i]+"-->"+quantity[i])
    if(fund == 0)
        {
            found=true
        }

}
if(fund != 0)
{
    console.log("Transaction Failed")
}