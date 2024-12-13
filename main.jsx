import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';
import {MyContext} from './components/MyContext.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyContext>
    <App />
    </MyContext>
    
    {/* <ToastContainer 
    position="top-right"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="colored"
    transition={Slide}
    /> */}
  </StrictMode>,
)
