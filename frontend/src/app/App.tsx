import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1>TEST</h1>
        <button>Write into database</button>
      </div>
    </QueryClientProvider>
  );
}

export default App;
