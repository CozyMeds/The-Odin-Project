const container = document.getElementById("container");
const numBoxsId = document.getElementById("numBoxs");

let result = 0;

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
			container.replaceChildren();
			return displayBoxs(result);
		}
	}
});

function displayBoxs(data) {
	const numOfElements = data;
	console.log(data)

	for (let i = 1; i <= numOfElements; i++) {
		const newElement = document.createElement("div");

		newElement.classList.add("child-box");
		newElement.textContent = `${i}`;
		container.append(newElement);
	}	
}