var date = moment().format("dddd, MMMM Do YYYY, HHmm");
var currentDay = document.getElementById("currentDay");
var present = document.getElementById("present");
var past = document.getElementById("past");
var future = document.getElementById("future");
var container = document.getElementById("container");
var currentHour = (currentDay.textContent = date);

//changes color of each timeblock depending on the time of the user visits site
function colorTimeBlock(hour) {
  var blockBackground;
  if (currentHour === hour) {
    blockBackground === "present";
  } else if (currentHour > hour) {
    blockBackground === "past";
  } else if (currentHour < hour) {
    blockBackground === "future";
  }
}

//function to iterate time, text area, and button
function buildTimeBlocks() {
  for (var i = 0; i < 10; i++) {
    var hour = document.createElement("div");
    var textArea = document.createElement("textarea");
    var button = document.createElement("button");
    //shows time attached to each block
    hour.innerHTML = (i+ 7).toString().padStart(2, "0").padEnd(4, "0");
    document.getElementById("hour")
    container.appendChild(hour);
    //provides text area
    textArea.innerHTML = "";
    document.getElementById("textarea")
    container.appendChild(textArea);
    //provides save btn
    button.innerHTML = "Save";
    document.getElementById("saveBtn")
    container.appendChild(button);
  }
}
buildTimeBlocks();

// var save = saveBtn.addEventListener("click", function(event) {
//     event.preventDefault();

//     localStorage.setItem("var", JSON.stringify(var));
//     alert("Information saved.")

//     });


// a daily planner to create a schedule
//scroll down, presented with timeblocks for standard business hours
//each timeblock is color coded to indicate whether it is in the past, present, or future
//click into a timeblock I can enter an event
// click the save button for that timeblock the text for that event is saved in local storage
//refresh the page, the saved events persist
