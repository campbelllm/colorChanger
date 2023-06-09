import { isAValidColor, hexColors } from "./colors";

function logWords(results) {
	console.log("these are the results",results[results.length - 1][0].transcript);
}

export function handleResult({results}) {
    logWords(results);
    console.log(results)
    const words = results[results.length - 1][0].transcript;
    let color = words.toLowerCase()
    color = color.replace(/\s/g, '');
    if (!isAValidColor(color)) {
        const alertBox = document.querySelector('.alertBoxContainer')
        alertBox.classList.add('show')
        const button = document.querySelector('.buttonClose')
        button.addEventListener('click', () => (alertBox.classList.remove('show')))
    }
    const colorSpan = document.querySelector(`.${color}`)
    colorSpan.classList.add('got')
    document.body.style.backgroundColor = color
}



