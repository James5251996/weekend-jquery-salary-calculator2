console.log('This is correctly sourced');

// create the on ready function.
$(document).ready(onReady);

// creating a salary array to keep track of all the salaries. 
let employeeSalaries = [];

// creating a function to host all of my listeners.
function onReady() {
    //Creating a listner for when i click submit.
    $('#submitBtn').on('click', employeeSubmit);

    //To-Do: create a delete listner.

};

// need to create an submit function 
function employeeSubmit() {
    //testing to see if my sumbit button works when i click it.
console.log('inside the employee submit function')
}

// need to create a delete function

// need to create a render function