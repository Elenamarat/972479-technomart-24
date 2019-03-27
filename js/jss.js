var contactsLink = document.querySelector(".contacts-button");
var contactsPopup = document.querySelector(".modal-write-us");
var contactsMap = document.querySelector(".contacts-map");
var contactsPopupMap = document.querySelector(".modal-map")
var buyLink = document.querySelector(".buy");
var buyPopup = document.querySelector(".modal-cart");
var closeModal = document.querySelector(".modal-close");

contactsLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactsPopup.classList.add("modal-show");
});

contactsMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactsPopupMap.classList.add("modal-show");
});

buyLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  buyPopup.classList.add("modal-show");
});

closeModal.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactsPopup.classList.remove("modal-show");
  contactsPopupMap.classList.remove("modal-show");
  buyPopup.classList.remove("modal-show");
});
