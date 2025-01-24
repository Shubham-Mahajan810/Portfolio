// Contact Form Submission
const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

  alert('Thank you for your message, I will get back to you soon!');
  form.reset();
});
