import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from './components/ui/sonner';
import { AppContextProvider } from './context/AppContextProvider';
import { AppRoutes } from './Routes';
import { Modals } from './components/organisms/Modals/Modals';

  const queryClient = new QueryClient(); 

function App() {

  return (
    <QueryClientProvider client = {queryClient}>
      <AppContextProvider>
        <AppRoutes />
        <Modals />
        <Toaster />
      </AppContextProvider>
    </QueryClientProvider>
    
  );
}

export default App;