const start = () => {
  window.location.href = "game.html";
  
};
window.addEventListener("DOMContentLoaded", function() {
  showAlarm();
});

document.getElementById("backButton").addEventListener("click", () => {
  window.location.href = "index.html";
});

// Save the last event or form data before navigating away
window.addEventListener('beforeunload', function(event) {
  // Get the relevant event or form data
  var eventData = event;

  // Save the data to Local Storage
  localStorage.setItem('lastEventData', JSON.stringify(eventData));
});

let numLock = 0;


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
      window.location.href = "game.html";
      document.querySelector(".custom-card").style.visibility = "visible";
      document.querySelector("#clock").style.color = "white";
      start();
    }else{
      window.location.href = "index.html";
    }
  });
  document.querySelector(".custom-card").style.visibility = "hidden";

}


function startCountdown() {
  var countDownDate = new Date().getTime() + 182000; //3 min 

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


function openPopup(popupId) {
  var popup = document.getElementById("popup" + popupId);
  popup.style.display = "block";
}

function closePopup(popupId) {
  var popup = document.getElementById("popup" + popupId);
  popup.style.display = "none";
}
function getValueStar(popupId) {
  
  var inputValue = document.getElementById("value");
  var wrongValue = document.getElementById("wrongValue");

  var value = inputValue.value;
  if(value == 11){
    var popup = document.getElementById("popup" + popupId);
    popup.style.display = "none";
    var unlock = document.getElementById("unlock1");
    unlock.onclick = null;
    unlock.style.pointerEvents = "none";
    var lockElement = document.getElementById("lock1");
    lockElement.classList.remove("fa-lock"); // Remove the old class
    lockElement.classList.add("fa-lock-open"); // Add the new class
    numLock++;
    if (numLock == 3) {
      win();   
    }
    else{
    post();
    }
    
  }else{
    wrongValue.innerText="قيمه خاطئه"
  }
}
function getValueCircle(popupId) {
  
  var inputValue = document.getElementById("value1");
  var wrongValue = document.getElementById("wrongValue1");

  var value = inputValue.value;
  if(value == 5){
    var popup = document.getElementById("popup" + popupId);
    popup.style.display = "none";
    var unlock = document.getElementById("unlock3");
    unlock.onclick = null;
    unlock.style.pointerEvents = "none";
    var lockElement = document.getElementById("lock3");
    lockElement.classList.remove("fa-lock"); // Remove the old class
    lockElement.classList.add("fa-lock-open"); // Add the new class
    numLock++;
    if (numLock == 3) {
      win();
    }
    else{
    post();
    }
    
  }else{
    wrongValue.innerText="قيمه خاطئه"
  }
}





// Get all the switches
const switches = document.querySelectorAll('input[type="checkbox"]');

// Add event listeners to all switches
switches.forEach((switchElement) => {
  switchElement.addEventListener('change', checkAllLampsOn);
});

// Function to check if all lamps' lights are turned on
function checkAllLampsOn() {
  let isSwitch0On = false;
  let isSwitch2On = false;
  let isSwitch3On = false;
  let otherSwitchesOn = false;

  switches.forEach((switchElement, index) => {
    if (index === 0 && switchElement.checked) {
      isSwitch0On = true;
    } else if (index === 2 && switchElement.checked) {
      isSwitch2On = true;
    } else if (index === 3 && switchElement.checked) {
      isSwitch3On = true;
    } else if (index !== 0 && index !== 2 && index !== 3 && switchElement.checked) {
      otherSwitchesOn = true;
    }
  });

  if (isSwitch0On && isSwitch2On && isSwitch3On && !otherSwitchesOn) {
    var popup = document.getElementById("popup" + 2);
    popup.style.display = "none";
    var unlock = document.getElementById("unlock2");
    unlock.onclick = null;
    unlock.style.pointerEvents = "none";
    var lockElement = document.getElementById("lock2");
    lockElement.classList.remove("fa-lock"); // Remove the old class
    lockElement.classList.add("fa-lock-open"); // Add the new class
    numLock++;
    if (numLock == 3) {
      win();
    }
    else{
    post();
    }
  } else {
    console.log('Not all lamps are turned on.');
  }
}


function win(){
  const openDoor = document.getElementById("openDoor");
  const imgElement = openDoor.querySelector("img");
  imgElement.setAttribute("src", "./images/open-door.png");
  imgElement.setAttribute("width", "400px");
  setTimeout(function() {
    window.location.href = "treasure.html";
  }, 3000); 
}


function post(){
fetch("https://64d8ae885f9bf5b879ce7360.mockapi.io/memes", {
    method: "GET",
})
  .then(response => response.json())
  .then(data => {
      const imageUrl = data;
      const randomIndex = Math.floor(Math.random() * imageUrl.length);
      const randomImageUrl = imageUrl[randomIndex].image;

      
    const memeImage = document.createElement('img');
    let imgContent = randomImageUrl;
    memeImage.setAttribute("src", imgContent);
    var meme = document.getElementById("meme-container");

    meme.appendChild(memeImage);
    meme.style.display="block";

    setTimeout(function() {
      meme.removeChild(memeImage);
      meme.style.display="none";
    }, 2000); 
  
    })
    .catch(err => {
        console.log('====================================');
        console.log(err);
        console.log('====================================');
    });
  }




  