var currentTime = moment().format("dddd, MMMM Do YYYY, HHmm");
var currentDay = document.getElementById("currentDay");
var container = document.getElementById("container");

var currentHour = (currentDay.textContent = currentTime);

function updateClock() {
  var time = moment().format("dddd, MMMM Do YYYY, HHmm");
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
    // document.getElementById("hour");
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

    //color backgrounds of textareas according to time of day
    var presentAtt = document.createAttribute("id");
    presentAtt.value = "present";
    var pastAtt = document.createAttribute("id");
    pastAtt.value = "past";
    var futureAtt = document.createAttribute("id");
    futureAtt.value = "future";
    if (currentTime == hour) {
      textArea.setAttribute("id", "present");
    } else if (currentTime > hour) {
      textArea.setAttribute("id", "past");
    } else if (currentTime < hour) {
      textArea.setAttribute("id", "future");
    }

    button.addEventListener("click", function (event) {
      event.preventDefault();
      localStorage.setItem(this.textContent, event);
      alert("Information saved.");
    });
  }
}
buildTimeBlocks();











//notes:
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
