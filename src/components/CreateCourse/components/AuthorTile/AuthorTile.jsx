import './AuthorTile.css';
import React, { useContext } from 'react';
import AppContext from '../../../../helpers/AppContext';
import Button from '../../../../common/Button/Button';

function AuthorTile(props) {
	const { authorsList, setAuthorsList } = useContext(AppContext);
	const { buttonInfo, author, courseAuthors, setCourseAuthors } = props;

	const handleAuthorsLists = () => {
		if (buttonInfo === 'Add author') {
			setCourseAuthors([
				...courseAuthors,
				{ id: author.id, name: author.name },
			]);
			setAuthorsList(
				authorsList.filter((item) => !item.id.includes(author.id))
			);
		} else if (buttonInfo === 'Delete author') {
			setCourseAuthors(
				...authorsList.filter((item) => !item.id.includes(author.id))
			);
			setAuthorsList([...authorsList, { id: author.id, name: author.id }]);
		}
	};

	return (
		<li className='authors-tile'>
			<p>{author.name}</p>
			<Button buttonText={buttonInfo} onClickHandler={handleAuthorsLists} />
		</li>
	);
}

export default AuthorTile;
