

import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import System from './Components/System';
import Page404 from './Components/Page404';
import Navigate from './Components/Navigation/Navigate'
import Footer from './Components/Navigation/Footer';
import Characters from './Components/Characters';
import Reviews from './Components/Reviews/Reviews';
import CreateReview from './Components/Reviews/CreateReview';
import UpdateReview from './Components/Reviews/UpdateReview';
import DetailReview from './Components/Reviews/DetailReview';
import SignUp from './Components/Auth/SignUp';
import LogIn from './Components/Auth/LogIn';
import { UserContextProvider } from './UserContext';

function App() {
  return (
    <>
      {/* Ndryshimi */}
      <UserContextProvider>
        <Navigate></Navigate>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/characters/' element={<Characters />}></Route>
          <Route path='/system/' element={<System />}></Route>
          <Route path='/reviews/' element={<Reviews />}></Route>
          <Route path='/makereview/' element={<CreateReview />}></Route>
          <Route path='/reviews/:id' element={<DetailReview />}></Route>
          <Route path='/itemUpdate/:id' element={<UpdateReview />}></Route>
          <Route path='/signup/' element={<SignUp />}></Route>
          <Route path='/login/' element={<LogIn />}></Route>
          <Route path='*' element={<Page404 />}></Route>
        </Routes>
        <Footer></Footer>
      </UserContextProvider>
    </>
  );
}

export default App;


