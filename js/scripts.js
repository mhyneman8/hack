
// form validation
(function() {
  let form = document.querySelector('#register-form');
  let emailInput = document.querySelector('#email');
  let passwordInput = document.querySelector('#password');

  function showErrorMessage(input, message) {
    let container = input.parentElement;
    let error = container.querySelector('.error-message');
    if (error) {
      container.removeChild(error);
    }

  if (message) {
    let error = document.createElement('div');
    error.classList.add('error-message');
    error.innerText = message;
    container.appendChild(error);
  }
}

  function validateEmail() {
    let value = emailInput.value;

    if (!value) {
      showErrorMessage(emailInput, 'Email is a required field');
        return false;
    }

    if(value.indexOf('@') === -1) {
      showErrorMessage(emailInput, 'You must enter a valid email address.');
        return false;
    }
    showErrorMessage(emailInput, null);
    return true;
  }

  function validatePassword() {
    let value = passwordInput.value;

    if(!value) {
      showErrorMessage(passwordInput, 'Password is a required field.');
        return false;
    }

    if (value.length < 8) {
      showErrorMessage(passwordInput, 'The password needs to be at least 8 characters long.');
        return false;
    }

    showErrorMessage(passwordInput, null);
      return true;
  }

  function validateForm() {
    let isValidEmail = validateEmail();
    let isValidPassword = validatePassword();
    return isValidEmail && isValidPassword;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Do not submit to the server
    if (validateForm()) {
      alert('Success!');
    }
  });

  emailInput.addEventListener('input', validateEmail);
  passwordInput.addEventListener('input', validatePassword);
})();


// geo location find me button
var geoLocate = document.getElementById('geo');
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    geoLocate.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  geoLocate.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
}

// offer modal
function offerContainer() {
  let offerContainer = document.querySelector('#offer-container');

  function showModal(title, text) {
    offerContainer.innerHTML = '';
    let modal = document.createElement('div');
    modal.classList.add('modal');

    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener('click', hideModal);

    let titleElement = document.createElement('h1');
    titleElement.innerText = title;

    let contentElement = document.createElement('p');
    contentElement.innerText = text;

    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    offerContainer.appendChild(modal);

    offerContainer.classList.add('is-visible');
  }

  function hideModal() {
    offerContainer.classList.remove('is-visible');
  }
  document.querySelector('#show-modal').addEventListener('click', () => {
    showModal('Modal title', 'This is the modal content!');
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && offerContainer.classList.contains('is-visible')) {
      hideModal();
    }
  });
  offerContainer.addEventListener('click', (e) => {
    let target = e.target;
    if (target === offerContainer) {
      hideModal();
    }
  });
})();

// add map to search.html
mapboxgl.accessToken = 'pk.eyJ1IjoibWh5bmVtYW4iLCJhIjoiY2ttYzdrZWM4Mjh3cDJwcXJ0dXp6dHZtdiJ9.51Y91GMZkjhaDhd02nRJqA';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11'
});

// profile2 radio outline on click

document.querySelector(".first-checkbox").addEventListener('click', function() {
  document.querySelector(".first-checkbox").classList.add("active");
  document.querySelector(".second-checkbox").classList.remove("active");
})
document.querySelector(".second-checkbox").addEventListener('click', function() {
  document.querySelector(".second-checkbox").classList.add("active");
  document.querySelector(".first-checkbox").classList.remove("active");
})
