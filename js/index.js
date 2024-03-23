// for any event update  ***********************

// Set the date we're counting down to
var countDownDate = new Date("mar 8, 2024 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  // document.getElementById("demo").innerHTML =`time left for dept tour = `;

  document.querySelector(".days").innerHTML = ` ${days} `;
  document.querySelector(".hours").innerHTML = ` ${hours} `;
  document.querySelector(".minutes").innerHTML = `${minutes} `;
  document.querySelector(".seconds").innerHTML = `${seconds} `;

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.querySelector(".timerHeadline").innerHTML =
      " our  mid exam start  from today.. 🥳";
    document.querySelector(".timer").style.display = "none";
  }
}, 1000);

// for marque **************

function marque() {
  // Set the date we're counting down to
  var countDownDate = new Date(" mar 5, 2024 00:00:00").getTime();

  // Update the count down every 1 second
  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(x);
      document.querySelector(".container").innerHTML = "";
    }
  }, 1000);

  return x;
}

marque();

// timerupdate

let timerShow = document.getElementById("timer");
function showtime() {
  setInterval(() => {
    counter();
  }, 1000);
  const date = new Date();
  const Time = date.getHours();

  function counter() {
    let date = new Date().getDate();
    let month = new Date().getMonth();
    let year = new Date().getFullYear();
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();

    console.log(timerShow);

    if (Time >= 0 && Time < 12) {
      timerShow.innerHTML = `🌤️Good Morning ${hours}: ${minutes}: ${seconds}`;
    } else if (Time > 12 && Time < 17) {
      timerShow.innerHTML = `😴 Good Afternoon ${hours}: ${minutes}: ${seconds}`;
    } else if (Time > 17 && Time < 20) {
      timerShow.innerHTML = `🌇Good Evening ${hours}: ${minutes}: ${seconds}`;
    } else {
      timerShow.innerHTML = ` 🌙Good Night  ${hours}: ${minutes}: ${seconds}  `;
    }
  }
}

showtime();
