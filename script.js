let popup = document.getElementById("my_modal_3");
    let loginForm = document.getElementById("login-form");
    let signupForm = document.getElementById("signup-form");

    function showModal() {
      popup.showModal();
      showLoginForm();
    }

    function closeModal() {
      popup.close();
    }

    function showSignUpForm() {
      loginForm.style.display = "none";
      signupForm.style.display = "block";
    }

    function showLoginForm() {
      signupForm.style.display = "none";
      loginForm.style.display = "block";
    }