// Write your solution in this file!
const employee = {
    name: "",
    streetAddress:"",
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};

    newEmployee[key] = value;

    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;

    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    return Object.assign({}, delete employee.key)
}
function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    employee[key] = value;
    return employee
   
}