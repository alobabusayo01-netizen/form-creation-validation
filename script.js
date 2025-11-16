
const form = document.getElementById('registrationForm');

    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission

      // Validate username
      const usernameInput = document.getElementById('username');
      const usernameError = document.getElementById('usernameError');
      if (usernameInput.value.length < 3) {
        usernameError.textContent = 'Username must be at least 3 characters long.';
        return.trim();
      } else {
        usernameError.textContent = '';
      }

      // Validate email
      const emailInput = document.getElementById('email');
      const emailError = document.getElementById('emailError');
      if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address.';
        return.trim();
      } else {
        emailError.textContent = '';
      }

      // Validate password
      const passwordInput = document.getElementById('password');
      const passwordError = document.getElementById('passwordError');
      if (passwordInput.value.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters long.';
        return.trim();
      } else {
        passwordError.textContent = '';
      }
      // If all validations pass, submit the form
      form.submit();
    });
