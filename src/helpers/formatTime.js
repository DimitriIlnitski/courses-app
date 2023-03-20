export default function formatTime(timeInMinutes) {
	let hours = Math.floor(Number(timeInMinutes) / 60);
	let minutes = Number(timeInMinutes) - hours * 60;
	return `${hours}:${minutes} `;
}
