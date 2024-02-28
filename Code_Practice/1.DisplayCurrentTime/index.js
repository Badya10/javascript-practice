/*
 Flow of the code:
    a) Fetch todays details in today variable
    b) Fetch individual values from today variable
*/
const today = new Date();
//console.log(today)

var currDate = today.getDate();
//console.log(currDate)

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var currDay = today.getDay();
//console.log(days[currDay]);

const monthsList = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var curMonth = today.getMonth();
//console.log(monthsList[curMonth])

var hours = today.getHours();
//console.log(hours)

var mins = today.getMinutes();
//console.log(mins)

console.log("Today is : " + days[currDay] + ", " + monthsList[curMonth] + " " + currDate);


