function getDayName(dateString) {
    let dayName;
    let date = new Date(dateString);
    if(date.getDay() == 0){
        dayName = "Sunday";
    } else if(date.getDay() == 1){
        dayName = "Monday";
    } else if(date.getDay() == 2){
        dayName = "Tuesday";
    } else if(date.getDay() == 3){
        dayName = "Wednesday";
    } else if(date.getDay() == 4){
        dayName = "Thursday";
    } else if(date.getDay() == 5){
        dayName = "Friday";
    } else if(date.getDay() == 6){
        dayName = "Saturday";
    }
    return dayName;
}

// I found a solution online which is good and has less code.

function getDayName(dateString) {
    let dayName;
    let dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    dayName = dayNames[new Date(dateString).getDay()];
    return dayName;
}

// Note: above solutions passed all the test cases

//=========================================

// Down below is the code provided by HackerRank


function main() {
    const d = +(readLine());

    for (let i = 0; i < d; i++) {
        const date = readLine();

        console.log(getDayName(date));
    }
}