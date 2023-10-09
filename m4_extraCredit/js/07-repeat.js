const init = () => mpgCount()

const milesInput = () => {
    let milesIn = Number(prompt("Enter the miles driven"));
    if (Number.isNaN(milesIn) == true) {
        alert("Please enter a numeric value!");
        return milesInput();
    } else {
        return milesIn;
    }
}

const gallonsInput = () => {
    let gallonsIn = Number(prompt("Enter the size of your tank in gallons"));
    if (Number.isNaN(gallonsIn) == true) {
        alert("Please enter a numeric value!");
        return gallonsInput();
    } else {
        return gallonsIn;
    }
}

const mpgCount = () => {
        let miles = milesInput();
        let gallons = gallonsInput();
        let mpg = miles / gallons;
        alert(`You drove ${miles} miles.`);
        alert(`Your tank size is ${gallons} gallons.`);
        alert(`You got ${parseInt(mpg, 10)} miles per gallon on this trip.`);
        return repeat();
}

const repeat = () => {
    let again = prompt("Repeat entries? (y or n)");
    if (again.toLowerCase() == "y") {
        mpgCount();
    } else if (again.toLowerCase() == "n") {
        alert("Thank you for using our services. Goodbye~!");
    } else {
        alert("Please select 'y' or 'n'.");
        return repeat();  
    }
}

init();