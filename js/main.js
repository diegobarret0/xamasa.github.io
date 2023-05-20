document.addEventListener('DOMContentLoaded', function() {
  console.log('DOMContentLoaded event fired');

  //Formulario
  // Obtener referencias a los elementos del formulario
  const form = document.getElementById('request-form');
  const nameInput = document.getElementById('name');
  const phoneInput = document.getElementById('phone');
  const emailInput = document.getElementById('email');
  const commentsInput = document.getElementById('comments');

  console.log(form);
  console.log(nameInput);
  console.log(phoneInput);
  console.log(emailInput);
  console.log(commentsInput);

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    
    clearErrors();

    
    let isValid = true;

    if (nameInput.value.trim() === '') {
      isValid = false;
      displayError(nameInput, 'Por favor, ingresa tu nombre');
    }

    if (phoneInput.value.trim() === '') {
      isValid = false;
      displayError(phoneInput, 'Por favor, ingresa tu telefono');
    } else if (!isValidPhone(phoneInput.value.trim())){
      isValid = false;
      displayError(phoneInput, 'Por favor, ingrese un numero de telefono valido');
    }

    if (emailInput.value.trim() === '') {
      isValid = false;
      displayError(emailInput, 'Por favor, ingresa tu correo electronico');
    } else if (!isValidEmail(emailInput.value.trim())) {
      isValid = false;
      displayError(emailInput, 'Por favor, ingresa un correo electronico valido');
    }

    if (commentsInput.value.trim() === '') {
      isValid = false;
      displayError(commentsInput, 'Por favor, ingresa una descripcion');
    }

    if (isValid) {
      form.submit();
      nameInput.value='';
      phoneInput.value='';
      emailInput.value='';
      commentsInput.value='';
    }
  });

  function displayError(input, message) {
    const errorDiv = input.nextElementSibling;
    errorDiv.innerText = message;
    errorDiv.style.display = 'block';
  }

  function clearErrors() {
    const errorDivs = document.querySelectorAll('.error');
    errorDivs.forEach(function(errorDiv) {
      errorDiv.innerText = '';
      errorDiv.style.display = 'none';
    });
  }

  function isValidEmail(email) {
    return /^\S+@\S+\.\S+$/.test(email);
  }

  function isValidPhone(phone){
    return /^\d+$/.test(phone);
  }

});