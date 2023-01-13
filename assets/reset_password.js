  // if(document.getElementbyId("forgotpassword") =! null){
  //     document.getElementbyId("forgotpassword").addEventListener("click" function(e){
  //       console.log("i clicked");
       

  //       });

  // }



if(document.getElementById("forgotPassword") != null) {

    document.getElementById("forgotPassword").addEventListener("click", function(e) {
        console.log("I clicked");
        const element = document.getElementById("forgot_password_form");
        if(element.classList.contains("d-none")) {
            element.classList.remove("d-none");
            element.classList.add("d-block");
        }
    });
}