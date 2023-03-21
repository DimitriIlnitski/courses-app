export default function filteredList(searchParams, mockedCoursesList) {
	if (typeof searchParams === 'undefined' || searchParams.length === 0) {
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
