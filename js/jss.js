var contactsLink = document.querySelector(".contacts-button");
var contactsPopup = document.querySelector(".modal-write-us");

contactsLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactsPopup.classList.add("modal-show");
});
