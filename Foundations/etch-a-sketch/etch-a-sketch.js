const container = document.getElementById("container");
const numBoxsId = document.getElementById("numBoxs");

let result = 16**2;
let containerWidth = 960;
let boxSize = containerWidth/16;

// Function to generate a random HEX color
function getRandomColor() {
  const chars = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += chars[Math.floor(Math.random() * 16)];
  }
  return color;
}

numBoxsId.addEventListener("click", () => {
	let isValid = false;
	while(!isValid) {
		let numBoxs = prompt("Enter grid size: ");
		const numBoxsNumber = Number(numBoxs);
		
		if (numBoxs === null){
			alert("Action cancelled by user");
			return;
		} else if (numBoxs.trim() === ""){
			alert("Error: That is not a valid number.");
		} else if (!Number.isInteger(numBoxsNumber)) {
			alert("Please enter a whole number.");
		} else if (numBoxsNumber < 1 || numBoxsNumber > 100) {
			alert("Error: The number must be between 1 and 100.");
		} else {
			isValid = true;
			result = numBoxsNumber ** 2;
			boxSize = containerWidth / numBoxsNumber;
			container.replaceChildren();
			return displayBoxs(result, boxSize);
		}
	}
});

function displayBoxs(data, size) {
	const numOfElements = data;
	const boxWidthHeight = size;

	for (let i = 1; i <= numOfElements; i++) {
		const newElement = document.createElement("div");

		newElement.classList.add("child-box");
		newElement.style.width = `${boxWidthHeight}px`;
		newElement.style.height = `${boxWidthHeight}px`;

		// 2. Add the dynamic hover listener right here
		newElement.addEventListener("mouseenter", () => {
			const freshColor = getRandomColor();
			newElement.style.backgroundColor = freshColor;
		});

		container.append(newElement);
	}	
}

displayBoxs(result, boxSize);