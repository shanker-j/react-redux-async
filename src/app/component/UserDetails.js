import React from 'react';

const UserDetails = (props) => {
	return (
		<div style={{ flex: 1 }}>
			<p>User Name: {props.username}</p>
			<p>User Name: {props.age}</p>
		</div>
	);
}

export default UserDetails;