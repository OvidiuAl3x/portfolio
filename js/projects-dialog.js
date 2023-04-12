let dialog = document.querySelector("#primul");

function openDialog() {
  dialog.classList.add("open-dialog");
  document.body.classList.add("body-fix");
}

function closeDialog() {
  dialog.classList.remove("open-dialog");
  document.body.classList.remove("body-fix");
}
