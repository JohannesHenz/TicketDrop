import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Homepage from '../pages/Homepage';

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<div>
				<h1>TEST</h1>
				<Homepage />
			</div>
		</QueryClientProvider>
	);
}

export default App;
