$.ajax({
  url: "https://randomuser.me/api/",
  dataType: "json",
  success: function (data) {
    //variables
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const perfile = document.getElementById("perfile");
    const phone = document.getElementById("phone");
    const age = document.getElementById("age");
    const location = document.getElementById("location");

    // data
    name.innerHTML =
      "Soy " + data.results[0].name.first + " " + data.results[0].name.last;
    email.innerHTML = data.results[0].email;
    perfile.src = data.results[0].picture.large;
    phone.innerHTML = data.results[0].phone;
    age.innerHTML = data.results[0].dob.age + " años";
    location.innerHTML =
      data.results[0].location.street.number +
      " " +
      data.results[0].location.street.name;
  },
});
function handleClick(elementId) {
  var element = document.getElementById(elementId);

  if (elementId == "Home") {
    element.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });
  } else if (elementId == "curriculum" || elementId == "cuv") {
    element.addEventListener("click", () => {
      document.getElementById("xp").scrollIntoView({
        behavior: "smooth",
      });
    });
  }
}
handleClick("Home");
handleClick("curriculum");
handleClick("cuv");
