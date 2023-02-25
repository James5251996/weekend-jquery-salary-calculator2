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

    // creating an if statement so that if an input is missing it will
    // not show and will give an alert.


    if (submitFirstName && submitLastName && submitID && submitTitle && submitAnnualSalary) {
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
        // adding in my montly costs function to run after everything has run in this function.
        
        // test to see if employeeSalaries gets updated.
        console.log(employeeSalaries)
        // adding my reset inputs function to reset the inputs to blank.
        resetInputFields();
    } else {
        alert('Missing Inputs')
    }
    addMonthlyCosts()

};

// need to create a delete function
function deleteEmployee() {
    // need to create a new array varaible to replace the object we delete
    let removeEmployee = [];

    // a log to test the delete emplyee button.
    console.log('inside the delete button.')

    // need to create a variable to check the info inside of the table
    const employeeToDelete = $(this).parent().siblings().first().text()

    // creating a loop to go through the array of items in the employeeSalaries
    // array and see if it matches the item we want to delete and then it will 
    // delete that line in the table
    for (employee of employeeSalaries) {
        if (employee.firstName !== employeeToDelete) {
            removeEmployee.push(employee)
        }
    }
    employeeSalaries = removeEmployee;
    render();
    subtractMonthlyCosts();

};


// creating a function to remove the inputs after you click submit.
function resetInputFields() {
    let submitFirstName = $('#firstNameInput').val('');
    let submitLastName = $('#lastNameInput').val('');
    let submitID = $('#idInput').val('');
    let submitTitle = $('#titleInput').val('');
    let submitAnnualSalary = $('#salaryInput').val('');
};

// created a funtion that will calcutlate the total monthly costs.
function addMonthlyCosts () {
    // delcare a variable that calculates monlthy costs
    let totalAnnualSalaries = 0;
    let monthlyCosts = 0;
    // create a thing to take the salary inputs and create a total annual salaries amount
    for (let salary of employeeSalaries) {
    totalAnnualSalaries = totalAnnualSalaries + Number(salary.annualSalary)
    };
    // take the total salaries and divide them by 12 to make it a monlthy cost.
    monthlyCosts = totalAnnualSalaries/12;
    // 
    $('#totalMonthlyCosts').empty().append(monthlyCosts);

    //this is an if statement with the condition that if the total costs are over 20,000 then the color changes to red
    if (monthlyCosts > 20000) {
        $('#totalMonthlyCosts').css('background-color', 'red');
    }
}

// creating a function that subtracts the total 
function subtractMonthlyCosts() {
    let totalAnnualSalaries = 0;
    let monthlyCosts = 0;
    for (let salary of employeeSalaries) {
         totalAnnualSalaries = Number(salary.annualSalary)
    };
    monthlyCosts = totalAnnualSalaries/12;
    $('#totalMonthlyCosts').empty().append(monthlyCosts);
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



