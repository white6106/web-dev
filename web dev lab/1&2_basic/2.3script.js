document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
    const output = document.getElementById('output');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
  
      if (name && email && message) {
        output.innerHTML = `
          <h2>Form Submission</h2>
          <p>Name:${name}</p>
          <p>Email: ${email}</p>
          <p>Message: ${message}</p>
        `;
        form.reset();
      } else {
        output.innerHTML = '<p style="color: red;">Please fill out all fields.</p>';
      }
    });
  });
  