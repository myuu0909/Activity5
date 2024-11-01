function displayName(name) {
    alert("Your name is " + name);
    document.write("Your name is " + name);
}

function InputGrade() {
    var name = prompt("Enter your name:");
    let totalScore = parseInt(prompt("Enter your total score:"));
    let totalItem = parseInt(prompt("Enter the total item:"));

    let compute = parseFloat((-4 * (totalScore / totalItem) + 5).toFixed(2));
    var remarks = checkRemarks(compute);

    // Output to the console
    console.log("Hello " + name + ", your grade is: " + compute + " and you are " + remarks);
}

function checkRemarks(grade) {
    var remarks = (grade > 3.0) ? "failed" : "passed";
    return remarks;
}

// Call the function to test it
InputGrade();
