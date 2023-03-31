export default function getAuthorsList(idArray, authorsArray) {
	return authorsArray.filter((author) => idArray.includes(author.id));
}
