// $("#ShowPassword").addEventListener("click", (e) => {
//     if (e.target.classList.contains("shownow")) {
//       e.target.classList.remove("shownow");
//       e.target.classList.add("hidenow");
//       $("#hidePassword").classList.remove("hidenow");
//       $("#hidePassword").classList.add("shownow");
  
//       $("#modalpasswordinput").type = "text";
//     }
//   });
//   $("#hidePassword").addEventListener("click", (e) => {
//     if (e.target.classList.contains("shownow")) {
//       e.target.classList.remove("shownow");
//       e.target.classList.add("hidenow");
//       $("#ShowPassword").classList.remove("hidenow");
//       $("#ShowPassword").classList.add("shownow");
  
//       $("#modalpasswordinput").type = "password";
//     }
//   });
  
  $("#closemodal").addEventListener("click", () => {
    $(".modal-window").style.display = "none";
  });
  $(".login").addEventListener("click", () => {
    $(".modal-window").style.display = "block";
  });