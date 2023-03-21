import './AuthorTile.css';
import React from 'react';
import Button from '../../../../common/Button/Button';

function AuthorTile(props) {
	const {
		buttonInfo,
		author,
		courseAuthors,
		setCourseAuthors,
		availableAuthors,
		setAvailableAuthors,
	} = props;

	const handleAuthorsLists = () => {
		if (buttonInfo === 'Add author') {
			setCourseAuthors([
				...courseAuthors,
				{ id: author.id, name: author.name },
			]);
			setAvailableAuthors(
				availableAuthors.filter((item) => !item.id.includes(author.id))
			);
			console.log(`available authors:1 ${availableAuthors}`);
			console.log(`course authors1: ${courseAuthors}`);
		} else if (buttonInfo === 'Delete author') {
			console.log(`available authors2: ${availableAuthors}`);
			console.log(`course authors2: ${courseAuthors}`);
			setCourseAuthors([
				...courseAuthors.filter((item) => !item.id.includes(author.id)),
			]);
			setAvailableAuthors([
				...availableAuthors,
				{ id: author.id, name: author.name },
			]);
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
