const container = document.getElementById("container");
const numBoxsId = document.getElementById("numBoxs");

let result = Number(0);
let containerWidth = 960;
let boxSize = 0;

numBoxsId.addEventListener("click", () => {
	let isValid = false;
	while(!isValid) {
		let numBoxs = prompt("Enter grid size: ");
		if (numBoxs === null){
			alert("Action cancelled by user");
			return null;
		}

		if (numBoxs.trim() === "" || isNaN(numBoxs)){
			alert("Error: That is not a valid number.");
		} else if (numBoxs < 1 || numBoxs > 100) {
			alert("Error: The number must be between 1 and 100.");
		} else {
			isValid = true;
			result = numBoxs ** 2;
			boxSize = containerWidth / numBoxs;
			container.replaceChildren();
			return displayBoxs(result, boxSize);
		}
	}
});

function displayBoxs(data, size) {
	const numOfElements = data;
	const boxWidthHeight = size

	for (let i = 1; i <= numOfElements; i++) {
		const newElement = document.createElement("div");

		newElement.classList.add("child-box");
		newElement.style.width = `${boxWidthHeight}px`;
		newElement.style.height = `${boxWidthHeight}px`;
		container.append(newElement);
	}	
}