//'',0,false undefined ,null===>Falsy Values

let myVar = 5;
if (myVar) {
  console.log("Truthy Values");
}

let myVar1 = 0;
if (myVar1) {
  console.log("Truthy Values");
} else {
  console.log("Eaat Nothing");
}

let myPocketMoney = 100;
myPocketMoney > 0 ? "Eat Biriyani" : "Eat Cha Biskut";
