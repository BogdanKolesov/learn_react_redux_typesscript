import React, { FC, useEffect } from 'react';
import { fetchUsers } from '../store/action-creators/user';
import { useActions } from './hooks/UseActions';
import { useTypedSelector } from './hooks/useTypedSelector';

const UserList: FC = () => {
	const { users, error, loading } = useTypedSelector(state => state.user);
	const { fetchUsers } = useActions();

	useEffect(() => {
		fetchUsers();
	}, []);

	if (loading) {
		return <h1>Идет загрузка...</h1>;
	}
	if (error) {
		return <h1>{error}</h1>;
	}
	return (
		<div>
			{users.map((user, index) => (
				<div key={index * Math.random()}>{user.name}</div>
			))}
		</div>
	);
};

export default UserList;
