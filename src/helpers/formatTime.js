export default function formatTime(timeInMinutes) {
	var hours = Math.floor(timeInMinutes / 60);
	var mins = timeInMinutes % 60;

	var hoursStr = hours < 10 ? '0' + hours : '' + hours;
	var minsStr = mins < 10 ? '0' + mins : '' + mins;

	return hoursStr + ':' + minsStr;
}
