import React, { useEffect } from 'react';
import { Outlet, history } from 'umi';

export default function Exception() {
	
	useEffect(() => {
		history.push('/Exception/Exception403');
	}, []);

	return (
		<>
			<Outlet />
		</>
	);
}
