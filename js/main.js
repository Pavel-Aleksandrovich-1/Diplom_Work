const links = document.querySelectorAll(".banner__arrow-link, .menu__list-item, .list__item-link");
for (const link of links) {
	link.addEventListener("click", clickHandler);
}
function clickHandler(e) {
	e.preventDefault();
	const href = this.getAttribute("href");
	document.querySelector(href).scrollIntoView({
		behavior: "smooth",
		block: "start"
	});
}

function openModal() {
	document.getElementById("modal").style.top = "0px";
}

function closeModal() {
	document.getElementById("modal").style.top = "-700px";
}