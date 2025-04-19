let tosForm = document.querySelector("#tosForm");
tosForm.addEventListener("submit", checkForm);

function checkForm(event) {
   tosForm.name.style.backgroundColor = "LightGreen";
   tosForm.address.style.backgroundColor = "LightGreen";
   tosForm.city.style.backgroundColor = "LightGreen";
   tosForm.state.style.backgroundColor = "LightGreen";
   tosForm.email.style.backgroundColor = "LightGreen";
   tosForm.zip.style.backgroundColor = "LightGreen";

   // Check if Name is empty
   if (tosForm.name.value === "") {
      tosForm.name.style.backgroundColor = "Orange";
      event.preventDefault();
   }

   // Check if Address is empty
   if (tosForm.address.value === "") {
      tosForm.address.style.backgroundColor = "Orange";
      event.preventDefault();
   }

   // Check if City is empty
   if (tosForm.city.value === "") {
      tosForm.city.style.backgroundColor = "Orange";
      event.preventDefault();
   }

   // Check if State is empty
   if (tosForm.state.value === "") {
      tosForm.state.style.backgroundColor = "Orange";
      event.preventDefault();
   }

   // Check if Email is empty
   if (tosForm.email.value === "") {
      tosForm.email.style.backgroundColor = "Orange";
      event.preventDefault();
   }

   // Check if ZIP code length is not 5
   if (tosForm.zip.value.length !== 5) {
      tosForm.zip.style.backgroundColor = "Orange";
      event.preventDefault();
   }
}
