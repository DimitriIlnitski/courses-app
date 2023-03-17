export default function getAuthorsList(idArray, authorsArray) {
	return authorsArray
		.filter((author) => idArray.includes(author.id))
		.map((author) => author.name)
		.join(', ');
}
