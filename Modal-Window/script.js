// Modal window is not only about CSS, JavaScript actually brings life to it.
// Here we will be implementing responsiveness of modal window.

// Selecting all the necessary classes to accomplish the task.
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelector(".show-modal");

// Creating a function which will contain all the actions that will get executed when show-modal button is clicked.
const openModal = function(){
	modal.classList.remove('hidden');
	overlay.classList.remove('hidden');
};
// Creating a function which will contain all the actions that will get executed when user want to close modal window.
const closeModal = function() {
	modal.classList.add('hidden');
	overlay.classList.add('hidden');
};

// Making show modal button responsive
btnOpenModal.addEventListener('click',openModal);

// For closing a modal window we will be implementing 3 ways.

// 1) when users click on close button.
btnCloseModal.addEventListener('click',closeModal);

// 2) when user clicks outside of the modal window.
overlay.addEventListener('click',closeModal);

// 3) when user presses escape button from the keyborad.
document.addEventListener('keydown', function(event) {
	if(event.key === "Escape" && !modal.classList.contains('hidden')){
		closeModal();
	}
});
