// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.querySelectorAll('.like-glyph').forEach(element => {
  element.addEventListener('click', (e) => {
  

    if (e.target.textContent === EMPTY_HEART) { // if empty make full
      e.target.textContent = FULL_HEART;
      e.target.classList.add('activated-heart');

    } else { // if full make empty
      e.target.textContent = EMPTY_HEART;
      e.target.classList.remove('activated-heart');
    }
  })
  });


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
