const snackbarShowBtn = document.querySelector(".snackbar-show-btn");
const snackbarHideBtn = document.querySelector(".snackbar-hide-btn-demo");
const snackbar = document.querySelector(".snackbar-demo");

// ----- script for snackbar --------- 

const hideSnackbar = () => {
    snackbar.style.display = "none";
}

const showSnackbar = () => {
    snackbar.style.display= "flex";
    setTimeout(hideSnackbar, 5000);
}

snackbarShowBtn.addEventListener("click", showSnackbar);
snackbarHideBtn.addEventListener("click", hideSnackbar);