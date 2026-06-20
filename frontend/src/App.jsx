import { Routes, Route } from 'react-router-dom';
import { Auth } from '@/pages/Auth/Auth';
import { NotFound } from './pages/NotFound';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SignupContainer } from './components/organisms/Auth/SignupContainer';
import { Toaster } from './components/ui/sonner';
import { SigninContainer } from './components/organisms/Auth/SigninContainer';
import { HomePage } from './pages/HomePage';

  const queryClient = new QueryClient(); 

function App() {

  return (
    <QueryClientProvider client = {queryClient}>
      <Routes>
        <Route path="/auth/signup" element={<Auth><SignupContainer /></Auth>} />
        <Route path="/auth/signin" element={<Auth><SigninContainer /></Auth>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
      <Toaster />
    </QueryClientProvider>
    
  );
}

export default App;