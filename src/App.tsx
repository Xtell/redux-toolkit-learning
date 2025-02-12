import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'
import { MainPage } from './pages/MainPage'
import { LoginPage } from './pages/Login'
import { AppLayout } from './Layouts/AppLayout'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
