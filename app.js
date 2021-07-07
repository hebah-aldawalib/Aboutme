function question1(){
let favoriteSport = prompt('is football my favorite sport?')
favoriteSport = favoriteSport.toLowerCase();
let score=0;
if (favoriteSport === "yes") {
    console.log('befor', 'after');


    alert('good');
    score++;
}


else {
    alert('unfortunately')

}
}
question1();

function question2(){let swimming = prompt('i like swimming?')
if (swimming === "yes") {
    alert('wawooo')

}
else {
    alert('unfortunately')
}

}
question2();

function question3() {let basket = prompt('i like backetball?')
if (basket === "yes") {
    alert('nice')
}
else {
    alert('goodluck')
}
}
question3();

function question4() {let guess = prompt('guess number between 1-6')
while (guess != "6") {
    alert("not correct")
    guess = prompt('guess number between 1-6')
}
alert("corret")
if (guess ==) {
    console.log('not correct');
}
else if (guess == '6') {
    console.log('correct answer')
}
else {
    console.log('pls answer')
}
}
question4();


function question5() {let color = ['blue', 'pink', 'black', 'yallow'];
console.log(color.length);
let fav=prompt('what is my bed color?');

for (let i = 0; i < color.length; i ++) {
    console.log(color[i]);
}
}
question5(),










