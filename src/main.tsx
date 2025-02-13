import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { initializeApp } from 'firebase/app'
import { getAnalytics } from "firebase/analytics";
import { store } from './store';
import { Provider } from 'react-redux'
import App from './App.tsx'

const firebaseConfig = {
  apiKey: "AIzaSyDhluNu_F2GINpHSPDItm4wy0_pAZHwqMg",
  authDomain: "simple-todo-af97c.firebaseapp.com",
  projectId: "simple-todo-af97c",
  storageBucket: "simple-todo-af97c.firebasestorage.app",
  messagingSenderId: "1008583984212",
  appId: "1:1008583984212:web:f059fc42ae0a94043b59c1",
  measurementId: "G-3GBXEYQ6XV"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>

  </StrictMode>,
)
