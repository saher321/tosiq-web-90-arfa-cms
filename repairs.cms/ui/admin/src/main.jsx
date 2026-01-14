import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'react-quill-new/dist/quill.snow.css';
import App from './App.jsx'
import { Toaster } from './components/ui/sonner';
import { AuthProvider } from './AuthContext.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster position="top-center" duration={3000} richColors />
    <AuthProvider>
      <GoogleOAuthProvider clientId="109555217286-clkp7r9vqpck58vaug56qg5r34aje9k1.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>
    </AuthProvider>
  </StrictMode>,
)
