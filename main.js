// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here! 

//To hide the error message 
modal = document.getElementById('modal')
modal.classList.add('hidden')
//To grab where the empty hearts are
const like = document.getElementsByClassName('like-glyph')
//My like event listener 
console.log(like)
const likeArray = Array.from(like)
console.log(likeArray)
likeArray.forEach(e => {
  e.addEventListener('click', handleLike)
})

function handleLike(e) {
mimicServerCall()
.then(function () {
  let notLiked = e.target.innerText === EMPTY_HEART
  if (notLiked) {
e.target.innerText = FULL_HEART
e.target.classList.add('activated-heart')
console.log(e.target.classList)
  } else {
e.target.innerText = EMPTY_HEART
e.target.classList.remove('activated-heart')
console.log(e.target.classList)
  }
  //innerText will need to be updated to the "full-heart"
  //will also need to add the class name of activated-heart
  //will need and if else statment for if heart is full or empty 
})

.catch(function (error) {
  modal.classList.remove('hidden')
  modal.innerText = error
  //setTimeout function
  setTimeout(function() {
    modal.classList.add('hidden')
  }, 3000) 
})
}


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
