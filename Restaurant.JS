function openTheForm() {
    document.getElementById("popupForm").style.display = "block";
}
  
function closeTheForm() {
    document.getElementById("popupForm").style.display = "none";
}

window.onclick = function (event) {
    let modal = document.getElementById('loginPopup');
    if (event.target == modal) {
      closeForm();
   }
}