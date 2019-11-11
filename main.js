/*global console, alert, prompt*/
/*
function myAgeInDays() {
    "use strict";

    var age = document.getElementById('yourAge').value,
        res = ("Your Age In Days = " + (age * 365) + " Days");



    if (age === "") { // Text Can't Be Empty
        
        document.getElementById('message').innerHTML = "This Faild Can't Be Empty";
        
    } else if (isNaN(age)) { // Text Can't Be String

        document.getElementById('message').innerHTML = "This Faild Accept Number Only";
        
    } else if (age === "0") { // Text Can't Be 0
        
        document.getElementById('message').innerHTML = 'Aww Very Smart haha ' + age + ' * Any Thing Equal Zero';
        
    } else if (age < "0") { // Text Can't Be Negative Number
        
        document.getElementById('message').innerHTML = 'Aww Very Smart Your Age = ' + age + ' hahaha';
        
    } else {
        
        document.getElementById('message').innerHTML = res;
    }
}


var season = prompt('What\'s Your Fav Subject');

switch (season) {
        
case "Maths":
    alert("The Maths It's Very Good");
    break;

case "Physics":
    alert("it's Not Bad");
    break;

default:
    alert("What's Fucking It");
    break;
}

*/

/*
var x = 1; // globalScope

function changeXTo2() {
    "use strict";
    var x = 2; // localScope
}



function changeXTo3() {
    "use strict";
    x = 3; // globalScope
}

console.log(x);

changeXTo2();

console.log(x);

changeXTo3();

console.log(x);
*/

/*
var friends = [
        "Moaaz",
        "Ali",
        "Ibrahem",
        "Mohamed"
    ];
console.log(friends);
friends.push('Amira');// Push New Item In The End Of Array
console.log(friends);
friends.unshift("Sameh");// Push New Item In The beginning OF Array
console.log(friends);
friends[friends.length] = "Alyaa"; // arrayName[Num But in Replaced] = "String"
console.log(friends);
friends.splice(2, 0, "Mostafa"); // arrayName.splice(indexNum, howManyDeleted, newItem1,newItem2, Bla Bla);
console.log(friends);
friends.pop(); // For Deleting A last Item Of Array
console.log(friends);
friends.shift(); // for Deleting A First Item Of Array
console.log(friends);
friends.sort();
console.log(friends);
friends.reverse();
console.log(friends);

var friendsForPlays = [
        "Ream",
        "Doaa"
    ];


var friendsForlearning = [
    "Shawky",
    "Harby"
];

var allFriends = friends.concat(friendsForPlays, friendsForlearning);

console.log(allFriends);
*/
/*jslint plusplus: true, evil: true*/
/*
function generateYears(Start, End) {
    "use strict";
        
    
    document.write("<select>");
    var years;
    
    for (years = Start; years <= End; years++) {
        document.write("<option value=\"" + years + "\">" + years + "</option>");
    }
        
    document.write("</select>");

}
generateYears(1900, 2020);
*/
















    
/*
function whenIClick() {
    "use strict";
    var Inter = document.getElementById("count").innerHTML,
        global = Inter++;
    console.log(document.getElementById("count").innerHTML = Inter++);
    if (document.getElementById("count").textContent >= 100) {
        document.getElementById("count").style.color = '#00A350';
    } else {
        document.getElementById("count").style.color = '#EE1144';
    }
    
}
var click = document.getElementById("clicker");
click.onclick =  function () {
    "use strict";
    click.innerHTML = "<span class='hvr-float-shadow' onclick = 'whenIClick()' id = 'clicker'></span>";
};


function whenIClear() {
    "use strict";
    
    var Inter = document.getElementById("count").innerHTML;
    console.log(document.getElementById("count").innerHTML = 0);
}




function whenISave() {
    "use strict";
    var valueSave = document.getElementById("count"),
        divSave = document.getElementById('save');
    divSave.innerHTML = valueSave.textContent;
     
    
    
}


*/




const deg = 6;
    const hr = document.querySelector("#hr");
    const mn = document.querySelector("#min");
    const sc = document.querySelector("#sec");
setInterval(() => {
    
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;
    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
    
})











