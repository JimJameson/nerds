var link = document.querySelector(".button-write-to-us");
var popup = document.querySelector(".write-to-us");
var close = popup.querySelector(".write-to-us-close-button");

var popupName = popup.querySelector("[name=name]");
var popupMail = popup.querySelector("[name=mail]");
var popupText = popup.querySelector("textarea");
var form = popup.querySelector("form");

var isStorageSupport = true;

try {
  localStorage.getItem("popupName");
} catch (err) {
  isStorageSupport = false;
}

function setStorage() {
    if (isStorageSupport) {
        localStorage.setItem("popupName", popupName.value);
        localStorage.setItem("popupMail", popupMail.value);
        localStorage.setItem("popupText", popupText.value);
      }
}

function getStorage() {
    if (isStorageSupport) {
        localStorage.getItem("popupName", popupName.value);
        localStorage.getItem("popupMail", popupMail.value);
        localStorage.getItem("popupText", popupText.value);
      }
}

function removeStorage() {
    if (isStorageSupport) {
        localStorage.removeItem("popupName", popupName.value);
        localStorage.removeItem("popupMail", popupMail.value);
        localStorage.removeItem("popupText", popupText.value);
      }
}

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  
  popupName.focus();

  getStorage();
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
  setStorage();
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
      evt.preventDefault();
      setStorage();
    }
  }
});

form.addEventListener("submit", function(evt) {
  if (!popupName.value || !popupMail.value || !popupText.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    removeStorage();
}
});

