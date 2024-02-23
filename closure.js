function kitchen(){
    let roast = 0;
    return function(){
        roast ++;
        return roast;

    }
}
const firstServed = kitchen();
console.log(firstServed());
console.log(firstServed());



// another 
function stopWatch (){
    let count = 0;
    return function(){
        count ++;
        return count;
    }
}

const watch1 = stopWatch();
console.log(watch1());
console.log(watch1());
console.log(watch1());
console.log(watch1());
