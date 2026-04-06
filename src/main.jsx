import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import { TransactionProvider } from "./Context/TransactionContext.jsx";
import { ThemeProvider } from "./Context/ThemeContext";


createRoot(document.getElementById('root')).render(

<ThemeProvider>
<TransactionProvider>
<BrowserRouter>
 <StrictMode>
    <App />
 </StrictMode>
 </BrowserRouter>
 </TransactionProvider>
 </ThemeProvider>
)