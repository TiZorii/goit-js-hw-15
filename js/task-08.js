const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function (e) {
  e.preventDefault(); 
  const formData = new FormData(loginForm); 

    
  if (formData.get('email') === '' || formData.get('password') === '') {
    alert('Please fill in all fields');
    return; 
  }

    
  const formDataObject = {
    email: formData.get('email'),
    password: formData.get('password'),
  };

  console.log(formDataObject);
  loginForm.reset(); 
});

