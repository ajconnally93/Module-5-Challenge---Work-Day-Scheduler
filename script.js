const currentDate = moment().format('dddd') + ' ' + moment().format('Do MMM YYYY');
const currentTime = moment().format('h:mm:ss a');

// Console logs work and show current day + current time
console.log(currentDate);
console.log(currentTime);

//////
// Creating for loop to create multiple variables for each text hour
//////

const hour = moment().hours();

// logs current hour without minute or seconds
console.log(hour);

// function to pass through setInterval to display the live time
function inInterval() {
    const currentMoment = moment();
    $('#currentDay').html(currentMoment.format('YYYY MMMM DD') + ' ' + currentMoment.format('dddd').toUpperCase());
    $('#currentDay').html(currentDate + ' ' + currentMoment.format('hh:mm:ss A'));
}

// Now displays the live time by the second (assuming you open with Live Server)
const interval = setInterval(inInterval, 100);