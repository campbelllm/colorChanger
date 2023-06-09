import { colorsByLength, isDark, hexColors } from './colors';
import { handleResult } from './handlers';

window.SpeechRecognition =
	window.SpeechRecognition || window.webkitSpeechRecognition;

const colorsEl = document.querySelector('.colors');

function displayColors(colors) {
    return colors
           //  onClick=${hexColors(color)};
		.map(
			(color) =>
				`<span class ="color ${color} ${
					isDark(color) ? 'dark' : ''
                }" style="background: ${color};"
             
                 >${color}</span>`
		)
		.join(''); t
}

function start() {
	//does their browser support speech recognition
	if (!window.SpeechRecognition) {
		return;
	}
	//speech recognition starting
	const recognition = new SpeechRecognition();
	recognition.continuous = true;
	recognition.intermResults = true;
	recognition.onresult = handleResult;
	recognition.start();
}

start();

colorsEl.innerHTML = displayColors(colorsByLength);
