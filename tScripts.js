
  window.addEventListener("DOMContentLoaded", function() {
    showAlarm();
  });
  
  document.getElementById("backButton").addEventListener("click", () => {
    window.location.href = "index.html";
    
  });


  
  function showAlarm() {
    Swal.fire({
      icon: 'info',
      title: 'لقد هربت بنجاح ',
      text: 'ولكن يوجد صندوق كنز حاول فتحه!!',
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
        window.location.href = "game.html";
      }else{
        window.location.href = "index.html";
      }
    });
    document.querySelector(".custom-card").style.visibility = "hidden";
  
  }
  
  
  function startCountdown() {
    var countDownDate = new Date().getTime() + 2000+10000*6; //1 min 
  
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
  
  
  function openPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
  }
  
  function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
  }
  function crack() {
    
    var num1 = document.getElementById("b1");
    var num2 = document.getElementById("b2");
    var num3 = document.getElementById("b3");
    var wrongValue = document.getElementById("wrongValue");

  
    var value1 = num1.value;
    var value2 = num2.value;
    var value3 = num3.value;

    if(value1 == "t" && value2 == "a" && value3=="c"){
        closePopup();
        win();
      
    }else{
      wrongValue.innerText="قيمه خاطئه";
    }
  }

  function win(){
    const confetti = document.querySelector(".confetti");
    const treasureOpen = document.getElementById("treasureOpen");
    const imgElement = treasureOpen.querySelector("img");
    imgElement.setAttribute("src", "./images/treasureOpen.png");
    confetti.style.display="block";
    setTimeout(function() {
        window.location.href = "index.html";
      }, 3000); 
  }
  

 