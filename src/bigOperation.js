const Big = require('big.js');
const bigOperation={
    add: (num1,num2)=>{
       return Big(num1).add(Big(num2)).toString();
    },
    sub: (num1,num2)=>{
        return Big(num1).sub(Big(num2)).toString();
     },
     mul: (num1,num2)=>{
        return Big(num1).mul(Big(num2)).toString();
     },
     div: (num1,num2)=>{
        return Big(num1).div(Big(num2)).toString();
     },
}
module.exports=bigOperation;