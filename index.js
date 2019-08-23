// **Iteration 1:** Add Random Message Functionality
//
// - When a user types in a question then clicks the "Get your answer" button, the use sees their question and a random answer from the list of possible answers (a list of the possible random answers is provided below)
// - The input field the user typed the question into should clear as soon as they click the "Get your answer" button
// - When the question and answer appear, the image of the 8 ball disappears


// Section for storing and displaying user input upon click

inputButton.addEventListener('click', function(event) {
  event.preventDefault();
  // I found this, .preventDefault,  online and it, for some reason, let's my function work. Otherwise, the text merely flashes briefly and doesn't keep displayed.
  var getInput = document.querySelector('#user-input').value;
  var inputButton = document.querySelector('#input-button');
  // Hoisted? Or needs to be made global?
    function hideImage() {
      var selectImage = document.querySelector('#img-one');
      if (selectImage.style.display === "block") {
        selectImage.style.display = "none";

      }
      }
    }
}); 




// Example pulled from the internet for using JS to hide elements (https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp)

// function myFunction() {
//   var x = document.getElementById("myDIV");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }


// Example pulled from the web for template TOGGLE functions to be emulated.

// function toggleImage() {
//    // get the clock
//    var  = document.getElementById('clock');
//
//    // get the current value of the clock's display property
//    var displaySetting = myClock.style.display;
//
//    // also get the clock button, so we can change what it says
//    var clockButton = document.getElementById('clockButton');
//
//    // now toggle the clock and the button text, depending on current state
//    if (displaySetting == 'block') {
//      // clock is visible. hide it
//      myClock.style.display = 'none';
//      // change button text
//      clockButton.innerHTML = 'Show clock';
//    }
//    else {
//      // clock is hidden. show it
//      myClock.style.display = 'block';
//      // change button text
//      clockButton.innerHTML = 'Hide clock';
//    }
//  }
