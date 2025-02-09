const modalContainerJS= document.querySelector("#modal-container-js");
const btnOpenModal = document.querySelector("#btn-open-modal");
const btnCloseModal= document.querySelector("#btn-close-modal");




 btnOpenModal.addEventListener("click",()=>modalContainerJS.classList.remove("display-none"));
 btnCloseModal.addEventListener("click",()=>modalContainerJS.classList.add("display-none"));