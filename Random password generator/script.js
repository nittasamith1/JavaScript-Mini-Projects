const output = document.getElementById("output");
const lower = document.getElementById("lower");
const upper = document.getElementById("upper");
const num = document.getElementById("Num");
const spe = document.getElementById("spe");
const length = document.getElementById("length");


generate();

function generate(){
let le = Number(length.value);
let l = lower.checked;
let u = upper.checked;
let n = num.checked;
let s = spe.checked;
output.textContent = PassGen(le,l,u,n,s);
}

function PassGen(length,isLower,isUpper,isNum,isSymbols){
      let lower = "abcdefghijklmnopqrstuvwxyz";
      let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let num = "0123456789";
      let spe = "!@#$%^&*()_+-={}[]|\><?/:;";

      let random = "";
      let MainPass = "";

      random += isLower? lower :"";

      random += isUpper? upper:"";
      
      random += isNum? num:"";

      random += isSymbols? spe:"";

      if(length===0){
        return `(Password should have minimum length 1)`;
      }
      if(random.length===0){
        return `(Select at least one option)`;
      }
      else{
           for(let i=0;i<length;i++){
            let pass = Math.floor(Math.random()*random.length);
            MainPass +=random[pass];
           }
      }
      return MainPass;
}