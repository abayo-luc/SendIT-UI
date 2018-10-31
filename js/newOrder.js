const nextForm = () => {
	let orderForms = [...document.getElementsByClassName("order-form")];
	let steps = [...document.getElementById("progressbar").children];

	let activeSteps = steps.filter(step => step.classList.contains("active"));
	let activeIndex = orderForms.indexOf(
		orderForms.find(form => form.classList.contains("active"))
	);
	orderForms[activeIndex].classList.remove("active");
	orderForms[activeIndex + 1].classList.add("active");
	console.log(activeSteps);
	if (steps.length > activeSteps.length) {
		steps[activeSteps.length].classList.add("active");
	}
};
