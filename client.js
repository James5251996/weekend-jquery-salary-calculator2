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
    $('#employeeTable').on('click', '#deleteBtn', deleteEmployee);
    /*To-Do: 
        create the delete function
        create the remove inputs function.
        create the function to calculate the monthly costs and to add/subtract them.
    */
};

// need to create an submit function 
function employeeSubmit() {
    //testing to see if my sumbit button works when i click it.
console.log('inside the employee submit function')
    // creating my variables for my inputs for the employee
    let submitFirstName = $('#firstNameInput').val();
    let submitLastName = $('#lastNameInput').val();
    let submitID = $('#idInput').val();
    let submitTitle = $('#titleInput').val();
    let submitAnnualSalary = $('#salaryInput').val();

    // this is a test to see if i click submit the values i inputed will log.
    console.log('test to see if inputs are being pulled correctly:',
     submitFirstName, submitLastName, submitID, submitTitle, submitAnnualSalary);

    // creating a new array to hold the input values of my submitted values
    let enteredInputs = {
        firstName: submitFirstName,
        lastName: submitLastName,
        id: submitID,
        title: submitTitle,
        annualSalary: submitAnnualSalary,
    };

    // now i need to take the input values and add it to the employeeSalaries array
    employeeSalaries.push(enteredInputs);

    // this is where i will call the render function to add the items when i submit to the table.
    render();
    // test to see if employeeSalaries gets updated.
    console.log(employeeSalaries)

};

// need to create a delete function
function deleteEmployee() {
    
}

// created a render function to add the items to the table.
function render() {
    // first i need to remove when is in the table already
    $('#employeeTable').empty();

    // now i will create what i need to add to the html to get the
    // input values to show on the table.
    // i also need to loop through the individual items in the employee salaries
    // array so it will post one object at a time.
    for (let employee of employeeSalaries) {
        $('#employeeTable').append(`
        <tr>
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.id}</td>
            <td>${employee.title}</td>
            <td>${employee.annualSalary}</td>
            <td>
                <button id='deleteBtn'>
                    Delete
                </button>
            </td>
        </tr>
        `)
    }
};



