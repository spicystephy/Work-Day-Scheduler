var hour = moment().format("dddd, MMMM Do YYYY, HHmm");
var currentDay = document.getElementById("currentDay");
var container = document.getElementById("container");

var currentHour = (currentDay.textContent = hour);

function updateClock(){
    var time= moment().format("dddd, MMMM Do YYYY, HHmm");
    $(currentDay).text(time);
}
setInterval(updateClock, 1000);

//function to iterate time, text area, and button
function buildTimeBlocks() {
  for (var i = 0; i < 10; i++) {
    var hour = document.createElement("div");
    var textArea = document.createElement("textarea");
    var button = document.createElement("button");
    //shows time attached to each block, displays 4 digit military time
    hour.innerHTML = (i + 7).toString().padStart(2, "0").padEnd(4, "0");
    document.getElementById("hour");
    hour.classList.add("hour");
    container.appendChild(hour);
    //provides text area
    textArea.innerHTML = "";
    // document.getElementById("textarea");
    textArea.classList.add("textarea");
    container.appendChild(textArea);
    //provides save btn
    button.innerHTML = "Save";
    // document.getElementById("saveBtn");
    button.classList.add("saveBtn");
    container.appendChild(button);
  }
  //   var blockBackground = document.createElement("blockBackground");
  var present = document.createAttribute("id");
  present.value = "present";
  var past = document.createAttribute("id");
  past.value = "past";
  var future = document.createAttribute("id");
  future.value = "future";
  if (currentHour === hour) {
    textArea.setAttribute("id", present);
  } else if (currentHour > hour) {
    textArea.setAttribute("id", past);
  } else if (currentHour < hour) {
    textArea.setAttribute("id", future);
  }

    var saveBtn = button.on("click", function(event) {
    event.preventDefault();
    localStorage.setItem(textArea, JSON.stringify(textArea));
    alert("Information saved.")
    });
}
buildTimeBlocks();





// a daily planner to create a schedule
//scroll down, presented with timeblocks for standard business hours
//each timeblock is color coded to indicate whether it is in the past, present, or future
//click into a timeblock I can enter an event
// click the save button for that timeblock the text for that event is saved in local storage
//refresh the page, the saved events persist










//changes color of each timeblock depending on the time of the user visits site
// function colorTimeBlock(hour) {
//   var blockBackground;
//   var present = document.createAttribute("present");
//   var past = document.createAttribute("past");
//   var future = document.createAttribute("future");
//   if (currentHour === hour) {
//     blockBackground === "present";
//   } else if (currentHour > hour) {
//     blockBackground === "past";
//   } else if (currentHour < hour) {
//     blockBackground === "future";
//   }
// }
// colorTimeBlock();
// var present = document.getElementById("present");
// var past = document.getElementById("past");
// var future = document.getElementById("future");