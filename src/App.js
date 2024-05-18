import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import Recipes from './pages/Recipes';
import Forum from './pages/Forum';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Forum />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='signup' element={<SignUpPage />} />
        <Route path='recipes' element={<Recipes />} />
        <Route path='*' element={<PageNotFound />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;


{/* <div className='app-container'> 
{/* <LoginPage /> */}
{/* <SignUpPage />
</div>

ini app-container perlu ditaro di setiap Login sama signup supaya flex kesamping, jangan di app comp nya */} 