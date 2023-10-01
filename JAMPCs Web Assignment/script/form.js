// script to disble the form when user choose to use the same shipping address
window.onload = init;

function init() {
   document.getElementById("shipping2").onclick = turnOnForm;
   document.getElementById("shipping1").onclick= turnOffForm;
}


function turnOffForm() {
   document.getElementById("country").disabled=true;
   document.getElementById("first_name").disabled=true;
   document.getElementById("last_name").disabled=true;
   document.getElementById("company").disabled=true;
   document.getElementById("Address").disabled=true;
   document.getElementById("Apartment").disabled=true;
   document.getElementById("postcode").disabled=true;
   document.getElementById("city").disabled=true;
   document.getElementById("state").disabled=true;
   document.getElementById("phone").disabled=true;
}
   
function turnOnForm() {
   document.getElementById("country").disabled=false;
   document.getElementById("first_name").disabled=false;
   document.getElementById("last_name").disabled=false;
   document.getElementById("company").disabled=false;
   document.getElementById("Address").disabled=false;
   document.getElementById("Apartment").disabled=false;
   document.getElementById("postcode").disabled=false;
   document.getElementById("city").disabled=false;
   document.getElementById("state").disabled=false;
   document.getElementById("phone").disabled=false;
}
