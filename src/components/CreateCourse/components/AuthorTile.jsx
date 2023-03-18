import './AuthorTile.css';
import React from 'react';
import Button from '../../../common/Button/Button';

function AuthorTile(props) {
	const { authorName, buttonInfo } = props;
	return (
		<li className='authors-tile'>
			<p>{authorName}</p>
			<Button buttonText={buttonInfo} />
		</li>
	);
}

export default AuthorTile;
