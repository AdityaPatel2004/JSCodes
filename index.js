const qrcode = require('qrcode');

const prompt=require("prompt-sync")({sigint:true});
const input = prompt("What's your website?: ");

let data= `${input}`
let stjson = JSON.stringify(data);

qrcode.toString(stjson,{type:"terminal"},(err,code)=>{
    if(err) console.log(err);
    console.log(code);
})
// qrcode.toDataURL(stjson,(err,code)=>{
//     if(err) console.log(err);
//     console.log(code);
// })