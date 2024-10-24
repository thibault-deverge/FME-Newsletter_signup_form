// DOM Elements
const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const errorMessage = document.getElementById("error-message");
const dismissButton = document.getElementById("dismiss-button");
const newsletterSection = document.querySelector(".newsletter");
const confirmationSection = document.querySelector(".confirmation");
const emailDisplay = document.querySelector(".confirmation__email");

// ***** Utility Functions *****
function validateEmail(email) {
	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailPattern.test(email);
}

function showError(message) {
	errorMessage.style.visibility = "visible";
	errorMessage.textContent = message;
	emailInput.classList.add("newsletter__input--error");
}

function clearError() {
	errorMessage.style.visibility = "hidden";
	errorMessage.textContent = "";
	emailInput.classList.remove("newsletter__input--error");
}

function toggleSections() {
	newsletterSection.classList.toggle("newsletter--active");
	confirmationSection.classList.toggle("confirmation--active");
}

function handleDismiss() {
	toggleSections();
}

// ***** Handle Form Submission *****
function handleSubmit(e) {
	e.preventDefault();
	const emailValue = emailInput.value.trim();

	if (!emailValue) {
		showError("Email address cannot be empty.");
	} else if (!validateEmail(emailValue)) {
		showError("Please enter a valid email address.");
	} else {
		clearError();
		emailDisplay.textContent = emailValue;
		toggleSections();
		emailInput.value = "";
	}
}

// ***** Event Handlers *****
form.addEventListener("submit", handleSubmit);
dismissButton.addEventListener("click", handleDismiss);
