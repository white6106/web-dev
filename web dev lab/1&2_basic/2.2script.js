function validateForm() {
    var userid = document.getElementById('userid').value.trim();
    var password = document.getElementById('password').value.trim();
    var name = document.getElementById('name').value.trim();
    var address = document.getElementById('address').value.trim();
    var country = document.getElementById('country').value.trim();
    var zipcode = document.getElementById('zipcode').value.trim();
    var email = document.getElementById('email').value.trim();
    var sex = document.getElementById('sex').value;
  
    var errorMessage = '';
  
    if (userid === '') {
      errorMessage += 'User ID is required.\n';
    }
    if (password === '') {
      errorMessage += 'Password is required.\n';
    }
    if (name === '') {
      errorMessage += 'Name is required.\n';
    }
    if (address === '') {
      errorMessage += 'Address is required.\n';
    }
    if (country === '') {
      errorMessage += 'Country is required.\n';
    }
    if (zipcode === '') {
      errorMessage += 'Zip Code is required.\n';
    } else if (!/^\d{5}$/.test(zipcode)) {
      errorMessage += 'Zip Code should be 5 digits.\n';
    }
    if (email === '') {
      errorMessage += 'Email is required.\n';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errorMessage += 'Invalid email address.\n';
    }
    if (sex === '') {
      errorMessage += 'Sex is required.\n';
    }
  
    if (errorMessage !== '') {
      document.getElementById('error-message').innerText = errorMessage;
      return false;
    }
  
    return true;
  }
  