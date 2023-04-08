import './AuthorTile.css';

import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../../../../common';
import { DELETE_AUTHOR, ADD_AUTHOR } from '../../../../constants';

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
		} else if (buttonInfo === 'Delete author') {
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
		<li
			data-testid={
				buttonInfo === 'Delete author'
					? `test-author-tile-${DELETE_AUTHOR}`
					: `test-author-tile-${ADD_AUTHOR}`
			}
			className='authors-tile'
		>
			<p>{author.name}</p>
			<Button buttonText={buttonInfo} onClickHandler={handleAuthorsLists} />
		</li>
	);
}

AuthorTile.propTypes = {
	buttonInfo: PropTypes.string,
	author: PropTypes.object,
	courseAuthors: PropTypes.array,
	setCourseAuthors: PropTypes.func,
	availableAuthors: PropTypes.array,
	setAvailableAuthors: PropTypes.func,
};

export default AuthorTile;
