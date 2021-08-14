/*Your friend/family member have a birthday coming up and you want to give them something special. You've decided to create an app for them that displays some of their special traits.
Create a simple interface that is a slideshow of words that best describe your friend/family member.

Extension: Make the app a Progressive Web App so it can work offline and the user can be prompted to add the app to their homescreen on  a mobile device.*/

// Two dimensional array
var screens = [
  ['Warm', '#f44336'],
  ['Nice', '#2196f3'],
  ['Cool', '#FF9800']
];
var descriptorEl = document.querySelector('.descriptor');
var speed = 1000;

function changeScreen(index) {
  descriptorEl.innerHTML = screens[index][0];
  document.body.style.backgroundColor = screens[index][1];
}

function start() {
  var index = 0;
  /* This setInterval is a built-in methods,It "Need/Must" to take two parameters:
    1. One is the function
    2. Second is the second
        (This javascript build in function is "calling" function, and it is going to call the function every 3 second
        (The time you put in, in the second parameter).) 
    */
  setInterval(function() {
    if (index === screens.length) {
      index = 0;
    }
    changeScreen(index);
    index++;
  }, speed);
}
start();
