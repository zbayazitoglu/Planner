var calender = ["", "", "", "", "", "", "", "", ""];
var message = "";
var time= 0;
var currenttime = moment();
$("p#currentDay").text(currenttime.toString());

if(currenttime.hour() < 9) {
    $('textarea#time1').addClass('future');
} else if(currenttime.hour() === 9) {
    $('textarea#time1').addClass('present');
} else if(currenttime.hour() > 9) {
    $('textarea#time1').addClass('past');
}

if(currenttime.hour() < 10) {
    $('textarea#time2').addClass('future');
} else if(currenttime.hour() === 10) {
    $('textarea#time2').addClass('present');
} else if(currenttime.hour() > 10) {
    $('textarea#time2').addClass('past');
}

if(currenttime.hour() < 11) {
    $('textarea#time3').addClass('future');
} else if(currenttime.hour() === 11) {
    $('textarea#time3').addClass('present');
} else if(currenttime.hour() > 11) {
    $('textarea#time3').addClass('past');
}

if(currenttime.hour() < 12) {
    $('textarea#time4').addClass('future');
} else if(currenttime.hour() === 12) {
    $('textarea#time4').addClass('present');
} else if(currenttime.hour() > 12) {
    $('textarea#time4').addClass('past');
}

if(currenttime.hour() < 13) {
    $('textarea#time5').addClass('future');
} else if(currenttime.hour() === 13) {
    $('textarea#time5').addClass('present');
} else if(currenttime.hour() > 13) {
    $('textarea#time5').addClass('past');
}

if(currenttime.hour() < 14) {
    $('textarea#time6').addClass('future');
} else if(currenttime.hour() === 14) {
    $('textarea#time6').addClass('present');
} else if(currenttime.hour() > 14) {
    $('textarea#time6').addClass('past');
}

if(currenttime.hour() < 15) {
    $('textarea#time7').addClass('future');
} else if(currenttime.hour() === 15) {
    $('textarea#time7').addClass('present');
} else if(currenttime.hour() > 15) {
    $('textarea#time7').addClass('past');
}

if(currenttime.hour() < 16) {
    $('textarea#time8').addClass('future');
} else if(currenttime.hour() === 16) {
    $('textarea#time8').addClass('present');
} else if(currenttime.hour() > 16) {
    $('textarea#time8').addClass('past');
}

if(currenttime.hour() < 17) {
    $('textarea#time9').addClass('future');
} else if(currenttime.hour() === 17) {
    $('textarea#time9').addClass('present');
} else if(currenttime.hour() > 17) {
    $('textarea#time9').addClass('past');
}

$("#button1").on("click", () => {
    message = $('textarea#time1').val();
    time = 1;
    setText()
})

$("#button2").on("click", () => {
    message = $('textarea#time2').val();
    time = 2;
    setText()
})

$("#button3").on("click", () => {
    message = $('textarea#time3').val();
    time = 3;
    setText()
})

$("#button4").on("click", () => {
    message = $('textarea#time4').val();
    time = 4;
    setText()
})

$("#button5").on("click", () => {
    message = $('textarea#time5').val();
    time = 5;
    setText()
})

$("#button6").on("click", () => {
    message = $('textarea#time6').val();
    time = 6;
    setText()
})

$("#button7").on("click", () => {
    message = $('textarea#time7').val();
    time = 7;
    setText()
})

$("#button8").on("click", () => {
    message = $('textarea#time8').val();
    time = 8;
    setText()
})

$("#button9").on("click", () => {
    message = $('textarea#time9').val();
    time = 9;
    setText()
})

function setText() {
    getCalender();
    calender[time-1] = message;
    localStorage.setItem("calender", JSON.stringify(calender));
}

function getCalender() {
    if(localStorage.getItem("calender") !== null) {
        calender = JSON.parse(localStorage.getItem("calender"));
    }
}

function getCalenderData() {
    $('textarea#time1').val(localStorage.getItem("calender") ? JSON.parse(localStorage.getItem("calender"))[0] : "");
    $('textarea#time2').val(localStorage.getItem("calender") ? JSON.parse(localStorage.getItem("calender"))[1] : "");
    $('textarea#time3').val(localStorage.getItem("calender") ? JSON.parse(localStorage.getItem("calender"))[2] : "");
    $('textarea#time4').val(localStorage.getItem("calender") ? JSON.parse(localStorage.getItem("calender"))[3] : "");
    $('textarea#time5').val(localStorage.getItem("calender") ? JSON.parse(localStorage.getItem("calender"))[4] : "");
    $('textarea#time6').val(localStorage.getItem("calender") ? JSON.parse(localStorage.getItem("calender"))[5] : "");
    $('textarea#time7').val(localStorage.getItem("calender") ? JSON.parse(localStorage.getItem("calender"))[6] : "");
    $('textarea#time8').val(localStorage.getItem("calender") ? JSON.parse(localStorage.getItem("calender"))[7] : "");
    $('textarea#time9').val(localStorage.getItem("calender") ? JSON.parse(localStorage.getItem("calender"))[8] : "");
}

getCalenderData();