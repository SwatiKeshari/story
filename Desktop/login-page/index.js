var form = document.getElementById("form");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    function validation(){
      if(email.value.length<9){
          email.style.border= '1px solid red';
          email.focus();
          return false;
      }

      if(password.value.length<6){
          password.style.border= '1px solid red';
          password.focus();
          return false;
      }
  }
