//====================JAVASCRIPT SCOPE START====================//
var lang = "Bangla";
function learn(topic){
    var lang = topic;
    console.log(`I'm learning ${lang}`);
}
learn('JavaScript');
console.log(`I know ${lang}`);
//====================JAVASCRIPT SCOPE ENDED====================//

//====================PREMATIVE START====================//
let a = 5;
let b = 6;
a = b;
console.log(`A = ${a}, B: ${b}`);
//====================PREMATIVE ENDED====================//

//====================REFERANCE START====================//
let aa = ["html", "css"];
let bb = ["Js", "react"];
bb = aa;
aa.push("tailwind");
console.log(`aa: ${aa} and bb: ${bb}`);
//====================REFERANCE ENDED===================//