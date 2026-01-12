import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'react-quill-new/dist/quill.snow.css';
import App from './App.jsx'
import { Toaster } from './components/ui/sonner';
import { AuthProvider } from './AuthContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster position="top-center" duration={3000} richColors />
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>,
)
