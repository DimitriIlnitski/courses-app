export default function formatDate(date) {
	var day = date.getDate();
	var month = date.getMonth() + 1;
	var year = date.getFullYear();

	return day + '/' + month + '/' + year;
}
