// Password validation
document.addEventListener('DOMContentLoaded', function() {
  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('confirmPassword');
  const passwordStrength = document.getElementById('password-strength');
  const passwordStrengthBar = document.getElementById('password-strength-bar');
  const passwordStrengthText = document.getElementById('password-strength-text');
  const signupButton = document.getElementById('signup-button');
  const signupForm = document.querySelector('form[action="/auth/signup"]');

  if (!passwordInput || !signupForm) return; // Only run on signup page

  // Show password strength meter when password field is focused
  passwordInput.addEventListener('focus', function() {
    passwordStrength.classList.remove('hidden');
  });

  // Check password strength
  passwordInput.addEventListener('input', function() {
    const password = passwordInput.value;
    let strength = 0;
    let feedback = [];

    // Length check
    if (password.length >= 8) {
      strength += 25;
    } else {
      feedback.push('At least 8 characters');
    }

    // Uppercase check
    if (/[A-Z]/.test(password)) {
      strength += 25;
    } else {
      feedback.push('At least one uppercase letter');
    }

    // Lowercase check
    if (/[a-z]/.test(password)) {
      strength += 25;
    } else {
      feedback.push('At least one lowercase letter');
    }

    // Number and special character check
    if (/[0-9!@#$%^&*(),.?":{}|<>]/.test(password)) {
      strength += 25;
    } else {
      feedback.push('At least one number or special character');
    }

    // Update strength bar
    passwordStrengthBar.style.width = strength + '%';
    
    // Update color based on strength
    if (strength < 50) {
      passwordStrengthBar.className = 'h-2 rounded-full bg-red-500';
      passwordStrengthText.className = 'text-xs mt-1 text-red-500';
    } else if (strength < 75) {
      passwordStrengthBar.className = 'h-2 rounded-full bg-yellow-500';
      passwordStrengthText.className = 'text-xs mt-1 text-yellow-600';
    } else {
      passwordStrengthBar.className = 'h-2 rounded-full bg-green-500';
      passwordStrengthText.className = 'text-xs mt-1 text-green-600';
    }

    // Update feedback text
    if (feedback.length > 0) {
      passwordStrengthText.textContent = 'Missing: ' + feedback.join(', ');
      signupButton.disabled = true;
    } else {
      passwordStrengthText.textContent = 'Password strength: Strong';
      if (confirmPasswordInput.value === password) {
        signupButton.disabled = false;
      }
    }
  });

  // Check if passwords match
  confirmPasswordInput.addEventListener('input', function() {
    if (confirmPasswordInput.value !== passwordInput.value) {
      confirmPasswordInput.setCustomValidity('Passwords do not match');
      signupButton.disabled = true;
    } else {
      confirmPasswordInput.setCustomValidity('');
      if (passwordInput.value.length >= 8 && 
          /[A-Z]/.test(passwordInput.value) && 
          /[a-z]/.test(passwordInput.value) && 
          /[0-9!@#$%^&*(),.?":{}|<>]/.test(passwordInput.value)) {
        signupButton.disabled = false;
      }
    }
  });

  // Form submission validation
  signupForm.addEventListener('submit', function(event) {
    const password = passwordInput.value;
    
    // Final validation before submission
    if (password.length < 8 || 
        !/[A-Z]/.test(password) || 
        !/[a-z]/.test(password) || 
        !/[0-9!@#$%^&*(),.?":{}|<>]/.test(password) ||
        confirmPasswordInput.value !== password) {
      event.preventDefault();
      alert('Please ensure your password meets all requirements and both passwords match.');
    }
  });
});

// Password toggle visibility
document.addEventListener('DOMContentLoaded', function() {
  const toggleButtons = document.querySelectorAll('.password-toggle');
  
  toggleButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      // Prevent the click from submitting the form
      e.preventDefault();
      e.stopPropagation();
      
      // Find the input field
      const input = this.parentElement.querySelector('input[type="password"], input[type="text"]');
      if (!input) return;
      
      // Toggle the input type
      const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
      input.setAttribute('type', type);
      
      // Change the eye icon
      const svg = this.querySelector('svg');
      if (type === 'text') {
        // Show the "eye-off" icon (password is visible)
        svg.innerHTML = `
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
        `;
      } else {
        // Show the "eye" icon (password is hidden)
        svg.innerHTML = `
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        `;
      }
    });
  });
});


