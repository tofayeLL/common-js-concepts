/* 
----------Truthy-----
1.true.
2.any number positive or negative number is truthy except (0).
3.any string will be truthy except empty.
4. '0' is truthy zero in string.
5. 'false' will be truthy false string .
6. empty object({}) will be truthy.
7.empty array ([]) will be truthy.


----------Falsy------
1.False.
2.(0) is always falsy.
3. ('') empty string is falsy.
4.(undefined) falsy jodi kono value set na kora hoy.
5. (null) falsy value.
 */

const x = {};
if(x){
    console.log('number is truthy');
}
else{
    console.log('number is falsy');
}