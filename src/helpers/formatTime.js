export default function formatTime(timeInMinutes) {
	let hours = Math.floor(timeInMinutes / 60);
	let minutes = timeInMinutes - hours * 60;
	return `${hours}:${minutes} `;
}
