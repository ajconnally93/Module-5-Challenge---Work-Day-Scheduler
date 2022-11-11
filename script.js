const currentDate = moment().format('dddd') + ' ' + moment().format('Do MMM YYYY');
const currentTime = moment().format('h:mm:ss a');

// Console logs work and show current day + current time
console.log(currentDate);
console.log(currentTime);

//////
// Could create for loop to create multiple variables for each text hour
//////

var hour = moment().hours();

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

// will set local storage later
// makes the value of each HTML ID (using jQuery) to equal what will be set into local storage later
function createPage() {
    $('#8am').val(JSON.parse(localStorage.getItem('08:00 am')));
    $('#9am').val(JSON.parse(localStorage.getItem('09:00 am')));
    $('#10am').val(JSON.parse(localStorage.getItem('10:00 am')));
    $('#11am').val(JSON.parse(localStorage.getItem('11:00 am')));

    $('#12pm').val(JSON.parse(localStorage.getItem('12:00 pm')));
    $('#13pm').val(JSON.parse(localStorage.getItem('01:00 pm')));
    $('#14pm').val(JSON.parse(localStorage.getItem('02:00 pm')));
    $('#15pm').val(JSON.parse(localStorage.getItem('03:00 pm')));
    $('#16pm').val(JSON.parse(localStorage.getItem('04:00 pm')));
    $('#17pm').val(JSON.parse(localStorage.getItem('05:00 pm')));
    $('#18pm').val(JSON.parse(localStorage.getItem('06:00 pm')));
}

// function to add class to .form-control (each hour block) based on if it's the past, present, or future
function bg() {
    $('.form-control').each(function () {
        console.log(this);
        const testTime = parseInt($(this).attr('id'));
        hour = parseInt(hour);
        if (hour > testTime) {
            $(this).addClass('past');

            // Testing this was actually pretty tricky, considering I was doing it at 10PM and the only times that were showing up based on my local time were 'past'
            $('.past').css('background-color', 'light-grey');
        } else if (hour < testTime) {
            $(this).addClass('future');
            $('.future').css('background-color', '#90EE90');
        } else {
            $(this).addClass('present');
            $('.present').css('background-color', '#FFCCCB');
        }
    });
}

// bg ();

// DOCUMENTATION FOR PERSONAL REFERENCE:
// A page can't be manipulated safely until the document is "ready." jQuery detects this state of readiness for you. Code included inside $( document ).ready() will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute. 

// will now set local storage
$(document).ready(function() {
    createPage();
    bg();
    $('.saveBtn').on('click', function() {
        userInput = $(this).siblings('.form-control').val().trim();
        hourSpan = $(this).siblings('.input-group-prepend').text().trim();
        localStorage.setItem(hourSpan, JSON.stringify(userInput));
    })

    // will clear local storage
    $('#clearDay').on('click', function() {
        localStorage.clear();
        createPage();
    })
});