let myImage = document.querySelector('img');

myImage.onclick = () => {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/hubble-telescope.JPG') {
      myImage.setAttribute('src','images/ton618.jpeg');
    } else {
      myImage.setAttribute('src','images/hubble-telescope.JPG');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Astronomy is cool, ' + myName;
    }
  }
  

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Astronomy is cool, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }
  