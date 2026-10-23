import { useQuery } from '@tanstack/react-query';
import React from 'react';

function Homepage() {
	const { data } = useQuery({
		queryKey: ['repoData'],
		queryFn: async () => {
			const response = await fetch('http://localhost:8080');
			if (!response.ok) {
				throw new Error('Failed to fetch data');
			}
			return response.text();
		}
	});
	return (
		<div>
			<h1>{data}</h1>
		</div>
	);
}

export default Homepage;
