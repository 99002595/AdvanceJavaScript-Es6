/* write a javascript program for calculting price on the items purchased, if the items are greater than 100 then discuont 10% is included*/
function showFinalCost(item){
    return function calculatePrice(cost)
    {
        if(item>100)
        return (cost-(cost*(10/100)))*item;
        else
        return cost*item;
    }
    }
    
    console.log(showFinalCost(50)(10));
    console.log(showFinalCost(101)(10));