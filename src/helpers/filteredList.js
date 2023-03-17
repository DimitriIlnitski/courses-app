export default function filteredList(searchParams, mockedCoursesList) {
	if (searchParams.length === 0) {
		return mockedCoursesList;
	} else {
		return mockedCoursesList.filter((course) => {
			return (
				course.title.toLowerCase().includes(searchParams.toLowerCase()) ||
				course.id.toLowerCase().includes(searchParams.toLowerCase())
			);
		});
	}
}

// let idPattern =
// 	/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/;
// if (idPattern.test(searchParams)) {
// 	return mockedCoursesList.filter((course) => course.id === searchParams);
// } else if (searchParams.length > 0) {
// 	return mockedCoursesList.filter((course) =>
// 		course.title.toLowerCase().includes(searchParams)
// 	);
// } else {
// 	return mockedCoursesList;
// }
