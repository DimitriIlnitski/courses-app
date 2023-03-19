export default function formatTime(timeInMinutes) {
	if (typeof timeInMinutes !== 'undefined' && timeInMinutes.length > 0) {
		let hours = Math.floor(Number(timeInMinutes) / 60);
		let minutes = Number(timeInMinutes) - hours * 60;
		return `${hours}:${minutes} `;
	} else {
		return `--:--`;
	}
}
