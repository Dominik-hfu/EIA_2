
function sendForm(): void {
  // Formulardaten sammeln
  const myForm = document.getElementById("myForm") as HTMLFormElement;
  const formData = new FormData(myForm);

  // AJAX-Anfrage senden
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://example.com/formdata");
  xhr.send(formData);
}