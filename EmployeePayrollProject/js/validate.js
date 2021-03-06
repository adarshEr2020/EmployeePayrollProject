window.addEventListener('DOMContentLoaded', (event) => {
   const name = document.querySelector('#name');
   const textError = document.querySelector('.text-error');
   name.addEventListener('input', function() {
      if ( name.value.length == 0) {
         textError.textContent = "";
         return;
      }
      try {
         (new PersonInfo()).name = name.value;
         textError.textContent = "";
      } catch (e) {
         textError.textContent = e;
      }
   });

const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input',function() {
    output.textContent = salary.value;
});

var d = new Date();
// clear all these value to if you need to compare year, month, day only,
d.setHours(0);
d.getMinutes(0);
d.getSeconds(0);

// use parseInt insted of Date.parse, remember to use var to avoid overriding the the global object 

var userMonth = parseInt(document.getElementById("month").value);
var userDay = parseInt(document.querySelector("#day").value);
var userYear = parseInt(document.querySelector("#year").value);
var selectedDate = new Date(userYear, userMonth, userDay);

// use getTime to compare insted of comparing manually.

if(selectedDate.getTime() >= d.getDate()){
    alert("Sorry, this date has not occurred yet, please submit a new entry.");
} else {
    (new PersonInfo()).start_date = selectedDate.value;
}
});
