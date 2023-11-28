for(let o = 99; o >= 1 ; o--){
    let bottlesRemaining = "bottles";
    let subBottles = o-1;
    
    
 

     if(o === 1 || subBottles === 1){
        bottlesRemaining = "bottle";
        if(subBottles===0){
            subBottles= "No ";
        }
    }
    

   
    console.log(o + " " + bottlesRemaining + " of beer on the wall" );
    console.log(o + " " + bottlesRemaining + " of beer");
    console.log("Take one down and pass it around, " + subBottles +  " " + bottlesRemaining + " of beer on the wall");
    
    
      
    
}
 


