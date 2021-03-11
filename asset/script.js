//setting the format
var formatCalendar = moment().format("dddd MMMM Do YYYY");
var fomratTime = moment().format("h:mm");

//content area
var hours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]
for (var i = 0; i < hours.length; i++) {
  var divId = ["9", "10", "11", "12", "1", "2", "3", "4", "5"];
  var textId = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];

  var newRow = $("<div class='row time-block'>");
  var timeSlot = $("<div class='col-md-1 hour'>");
  var timeText = $("<span>").text(hours[i]);
  var textParent = $("<div class='col-md-10'>");
  textParent.attr("id", divId[i]);
  var newText = $("<textarea class='description'>");
  newText.attr("id", textId[i]);
  var newBtn = $("<button class='col-md-1 saveBtn'>");
  var newI = $("<i class='fas fa-save'>");
  $(".container").append(newRow);
  newRow.append(timeSlot, textParent, newBtn);
  timeSlot.append(timeText);
  textParent.append(newText);
  newBtn.append(newI);
}

//show the record in the local storage
function renderStorage() {
  var nineStorage = localStorage.getItem("9am");
  var tenStorage = localStorage.getItem("10am");
  var elevenStorage = localStorage.getItem("11am");
  var twelveStorage = localStorage.getItem("12pm");
  var oneStorage = localStorage.getItem("1pm");
  var twoStorage = localStorage.getItem("2pm");
  var threeStorage = localStorage.getItem("3pm");
  var fourStorage = localStorage.getItem("4pm");
  var fiveStorage = localStorage.getItem("5pm");
  

  $("#9am").text(nineStorage);
  $("#10am").text(tenStorage);
  $("#11am").text(elevenStorage);
  $("#12pm").text(twelveStorage);
  $("#1pm").text(oneStorage);
  $("#2pm").text(twoStorage);
  $("#3pm").text(threeStorage);
  $("#4pm").text(fourStorage);
  $("#5pm").text(fiveStorage);
}

renderStorage();

$("button").on("click", function () {
  var divId = ["#9", "#10", "#11", "#12", "#1", "#2", "#3", "#4", "#5"];
  var textId = ["#9am", "#10am", "#11am", "#12pm", "#1pm", "#2pm", "#3pm", "#4pm", "#5pm"];

  var saveClick = $(this).siblings(divId).children(textId);
  var clickVal = saveClick[1].value
  var clickId = saveClick[1].id
  console.log("Saved text via click: ", clickVal);
  console.log("Clicked on this ID: ", clickId)
  localStorage.setItem(clickId, clickVal);
  var storedText = localStorage.getItem(clickId);
  console.log("stored text: ", storedText)
});

$("#currentDay").text(formatCalendar + " -- " + fomratTime);


// adding  ids to cycle through got the idea from stack overflow
var timeId = ["#9", "#10", "#11", "#12", "#1", "#2", "#3", "#4", "#5"];

if (moment().hour() === 9) {
  for (var i = 0; i < timeId.length; i++) {
    $(timeId[i]).attr("class", "col-md-10 future");
    $("#9").attr("class", "col-md-10 present");
  }
}

if (moment().hour() === 10) {
  for (var i = 1; i < timeId.length; i++) {
    $(timeId[i]).addClass("future");
    $("#10")
      .removeClass("future")
      .addClass("present");
    $("#9")
      .removeClass("present")
      .addClass("past");
  }
}

if (moment().hour() === 11) {
  for (var i = 2; i < timeId.length; i++) {
    $(timeId[i]).addClass("future");
    $("#11")
      .removeClass("future")
      .addClass("present");
    for (var j = 0; j <= 1; j++) {
      $(timeId[j])
        .removeClass("present")
        .addClass("past");
    }
  }
}

if (moment().hour() === 12) {
  for (var i = 3; i < timeId.length; i++) {
    $(timeId[i])
      .removeClass("future")
      .addClass("future");
    $("#12")
      .removeClass("future")
      .addClass("present");
    for (var j = 0; j <= 2; j++) {
      $(timeId[j])
        .removeClass("present")
        .addClass("past");
    }
  }
}

if (moment().hour() === 13) {
  for (var i = 4; i < timeId.length; i++) {
    $(timeId[i]).addClass("future");
    $("#1")
      .removeClass("future")
      .addClass("present");
    for (var j = 0; j <= 3; j++) {
      $(timeId[j]).addClass("past");
    }
  }
}

if (moment().hour() === 14) {
  for (var i = 5; i < timeId.length; i++) {
    $(timeId[i]).addClass("future");
    $("#2")
      .removeClass("future")
      .addClass("present");
    for (var j = 0; j <= 4; j++) {
      $(timeId[j]).addClass("past");
    }
  }
}

if (moment().hour() === 15) {
  for (var i = 6; i < timeId.length; i++) {
    $(timeId[i]).addClass("future");
    $("#3")
      .removeClass("future")
      .addClass("present");
    for (var j = 0; j <= 5; j++) {
      $(timeId[j]).addClass("past");
    }
  }
}

if (moment().hour() === 16) {
  for (var i = 7; i < timeId.length; i++) {
    $(timeId[i]).addClass("future");
    $("#4")
      .removeClass("future")
      .addClass("present");
    for (var j = 0; j <= 6; j++) {
      $(timeId[j]).addClass("past");
    }
  }
}

if (moment().hour() === 17) {
  $("#5")
    .removeClass("future")
    .addClass("present");
  for (var i = 0; i <= 7; i++) {
    $(timeId[i]).addClass("past");
  }
}

if (moment().hour() < 9) {
  for (var i = 0; i < timeId.length; i++) {
    $(timeId[i])
      .removeClass("past", "present")
      .addClass("future");
  }
}

if (moment().hour() > 17) {
  for (var i = 0; i < timeId.length; i++) {
    $(timeId[i])
      .removeClass("future", "present")
      .addClass("past");
  }
}