// for any event update  ***********************

// Set the date we're counting down to
var countDownDate = new Date("may 12, 2024 00:00:00").getTime();

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
      " our 2nd mid exam start  from today.. 🥳";
    document.querySelector(".timer").style.display = "none";
  }
}, 1000);

// for marque **************

function marque() {
  // Set the date we're counting down to
  var countDownDate = new Date(" may 8, 2024 00:00:00").getTime();

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
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();

    // console.log(timerShow);

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

// wish popup

let eidMubarak = document.querySelector(".img1");
let ramadan = document.querySelector(".img2");
let div = document.querySelector(".mainBox");
let OkBtn = document.querySelector(".okay");
let startEid = new Date("2024-04-09");
let endEid = new Date("2024-04-11");
let curentDate = new Date();


// wish popup closed

OkBtn.addEventListener("click", () => {
  div.style.display = "none";
});

//  common settimeout function 
let wishshowfunc = setTimeout(() => {
  div.style.display = "block";
},2000);

// this condition will show img difrent time difrent img 

if (curentDate >= startEid && curentDate <= endEid) {
  eidMubarak.style.display = "block";
  ramadan.style.display = "none";
  wishshowfunc();
} else if (curentDate < startEid) {
  wishshowfunc();
}

// this function clear main popup box 
function wishes() {
  // Set the date we're counting down to
  var countDownDate = new Date(" april 11, 2024 00:00:00").getTime();

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
      document.querySelector(".mainBox").innerHTML = " ";
    }
  }, 1000);

  return x;
}

wishes();

