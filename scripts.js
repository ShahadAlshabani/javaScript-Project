const start = () => {
  window.location.href = "game.html";
  
};
window.addEventListener("DOMContentLoaded", function() {
  showAlarm();
});

document.getElementById("backButton").addEventListener("click", () => {
  window.history.back();
});
function showAlarm() {
  Swal.fire({
    icon: 'info',
    title: 'مستعد للتحدي؟',
    text: 'فيه وقت انتبه له!!',
    showConfirmButton: true, // Show the "OK" button
    confirmButtonText: 'ابدأ',
    confirmButtonColor: '#333232',
    iconColor:'black',
    
  }).then(function(result) {
    if (result.isConfirmed) {
      startCountdown();
      document.querySelector(".custom-card").style.visibility = "visible";
    }
  });
}
function timeUpAlarm() {
  Swal.fire({
    icon: 'error',
    title: 'انتهى الوقت!',
    text: 'حاول مره اخرى',
    showCancelButton: true,
    confirmButtonText: 'ابدأ',
    cancelButtonText: 'الخروج',
    confirmButtonColor: 'black',
    cancelButtonColor: '#d33',
  }).then(function(result) {
    if (result.isConfirmed) {
      startCountdown();
      document.querySelector(".custom-card").style.visibility = "visible";
      document.querySelector("#clock").style.color = "white";
    }else{
      window.location.href = "index.html";
    }
  });
  document.querySelector(".custom-card").style.visibility = "hidden";

}


function startCountdown() {
  var countDownDate = new Date().getTime() + 120000+2000; //2 min 

  var timer = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

     // Calculate time units
     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
     var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    

    // Display the countdown timer
    var timerElement = document.getElementById("timer");
    timerElement.innerText = minutes + "m " + seconds + "s ";

    // Check if the countdown is finished
    if (distance <= 0) {
      clearInterval(timer);
      timerElement.innerText = 0 + "m " + 0 + "s ";
      timeUpAlarm()
    }

    // Change text color to red when the timer is close to its end
    if (seconds <= 10 && minutes == 0) {
      timerElement.style.color = "red";
      var clock = document.getElementById("clock");
      shakeClock(clock);
    } else {
      timerElement.style.color = "white";

    }
  }, 1000); // Update the timer every second
}
function shakeClock(clock) {
  clock.style.color="red";
  clock.classList.add('shake-effect');
  
  setTimeout(function() {
    clock.classList.remove('shake-effect');
  }, 500); // Adjust the duration of the shake effect (in milliseconds)

}
