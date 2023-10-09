const init = () => makeMoney()

const moneyInvest = () => {
    let investment = parseFloat(prompt("Enter investment amount xxxx.xx"));
    if (Number.isNaN(investment) == true) {
        alert("Please enter a valid dollar value!");
        return moneyInvest();
    } else if (investment.toString().length < 1 || investment.toString().length > 7) {
        alert("Please enter a valid dollar value!");
        return moneyInvest();
    } else {
        return investment;
    }
}

const moneyRate = () => {
    let rate = parseFloat(prompt("Enter interest rate as x.x"));
    if (Number.isNaN(rate) == true) {
        alert("Please enter a valid interest rate!");
        return moneyRate();
    } else if (rate < 0 || rate > 6.9) {
        alert("Please enter a valid percentage!")
        return moneyRate();    
    } else if (rate.toString().length < 1 || rate.toString().length > 3) {
        alert("Please enter a valid interest rate!");
        return moneyRate();
    } else {
        return rate * .01;
    }
}

const annualRate = () => {
    let annual = parseInt(prompt("Enter the number of years."), 10);
    if (Number.isNaN(annual) == true) {
        alert("Please enter a valid amount of time!");
        return annualRate();
    } else if (annual < 1 || annual > 30) {
        alert("Please enter a valid amount of time!")
        return annualRate();
    } else {
        return annual;
    }
}

const makeMoney = () => {
    let invest = moneyInvest();
    let percent = moneyRate();
    let years = annualRate();
    let roi = ((invest * percent) * years);
    alert(`Your total return on investment is $${roi}`);
    repeat();
}

const repeat = () => {
    let again = prompt("Do you want to check other investments? (y or n)");
    if (again.toLowerCase() == "y") {
        makeMoney();
    } else if (again.toLowerCase() == "n") {
        alert("Thank you for using our services. Goodbye~!");
    } else {
        alert("Please select 'y' or 'n'.");
        return repeat();  
    }
}

init();