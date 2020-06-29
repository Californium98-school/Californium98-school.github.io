$(function () {
  let sideMenuState = false;
  const $burger = document.getElementById("burger");
  $burger.onclick = () => {
    sideMenuState = !sideMenuState;
    if (sideMenuState === false) {
      document.getElementById("sideMenu").style.display = "none";
    }
    if (sideMenuState === true) {
      document.getElementById("sideMenu").style.display = "block";
    }
  };
  let $submitButton = document.getElementById("submit-button");
  let idGetRidArray = [
    "get-rid1",
    "get-rid2",
    "get-rid3",
    "get-rid4",
    "get-rid5",
    "get-rid6",
  ];
  var agreementAnswer = "I Agree";
  const agreement = () => {
    let agreementPrompt = prompt(
      "By submitting you are agreeing to attend meetings, grow as a coder, and have fun. Say 'I Agree' if you would like to continue"
    );
    if (agreementPrompt === agreementAnswer) {
      console.log("Hello");
      document.getElementById("submit-button").style.display = "none";
      for (i = 0; i < idGetRidArray.length; i++) {
        document.getElementById(idGetRidArray[i]).style.display = "none";
      }
      document.getElementById("thanks-gif").style.display = "unset";
      document.getElementById("sign-up-box").style.background =
        "radial-gradient(circle at 0% 107%, #3be935 45%, #2ccec6 70%)";
    }
  };
  $submitButton.onclick = () => {
    agreement();
  };
});
