let data=[1,1,1,0,1,1,1,1]
let win=1
let total=0
let startstreak=0
let longstreak=0
let startindex=0
for(let i=0;i<data.length-1;i++){
    if(data[i]==1 && data[i]==data[i+1]){
          if(win==1){
            startstreak= i
            total=total+1
        }
        
        win=win+1
      
        if(win > longstreak){
            longstreak=win
            startindex=startstreak
        }
    }
    else{
        win=1
    }
   
    
}

console.log("Longest streak: ",longstreak);
console.log("Total streaks: ",total);
if(total>=1){
console.log("Starting index of longest streak: ",startindex);
}