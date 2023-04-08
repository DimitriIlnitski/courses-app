export const mockedCoursesList = [
	{
		id: 'de5aaa59-90f5-4dbc-b8a9-aaf205c551ba',
		title: 'JavaScript',
		description: `Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum 
 has been the industry's standard dummy text ever since the
1500s, when an unknown 
 printer took a galley of type and scrambled it to make a type
specimen book. It has survived 
 not only five centuries, but also the leap into electronic
 typesetting, remaining essentially u
 nchanged.`,
		creationDate: '8/3/2021',
		duration: 160,
		authors: [
			'27cc3006-e93a-4748-8ca8-73d06aa93b6d',
			'f762978b-61eb-4096-812b-ebde22838167',
		],
	},
	{
		id: 'b5630fdd-7bf7-4d39-b75a-2b5906fd0916',
		title: 'Angular',
		description: `Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum 
 has been the industry's standard dummy text ever since the
1500s, when an unknown 
 printer took a galley of type and scrambled it to make a type
specimen book.`,
		creationDate: '10/11/2020',
		duration: 210,
		authors: [
			'df32994e-b23d-497c-9e4d-84e4dc02882f',
			'095a1817-d45b-4ed7-9cf7-b2417bcbf748',
		],
	},
];
export const mockedAuthorsList = [
	{
		id: '27cc3006-e93a-4748-8ca8-73d06aa93b6d',
		name: 'Vasiliy Dobkin',
	},
	{
		id: 'f762978b-61eb-4096-812b-ebde22838167',
		name: 'Nicolas Kim',
	},
	{
		id: 'df32994e-b23d-497c-9e4d-84e4dc02882f',
		name: 'Anna Sidorenko',
	},
	{
		id: '095a1817-d45b-4ed7-9cf7-b2417bcbf748',
		name: 'Valentina Larina',
	},
];

export const SEARCH = 'Search';
export const LOGOUT = 'Logout';
export const ADD_NEW_COURSE = 'Add new course';
export const UPDATE_COURSE = 'Update Course';
export const CANCEL = 'Cancel';
export const SHOW_COURSE = 'Show course';
export const CREATE_AUTHOR = 'Create author';
export const ADD_AUTHOR = 'Add author';
export const DELETE_AUTHOR = 'Delete author';
export const REGISTRATION = 'Registration';
export const LOGIN = 'Login';

export const mockedState = {
	user: {
		isAuth: true,
		name: 'Test Name',
		role: 'user',
	},
	courses: [],
	authors: [],
};
export const mockedStore = {
	getState: () => mockedState,
	subscribe: jest.fn(),
	dispatch: jest.fn(),
};
