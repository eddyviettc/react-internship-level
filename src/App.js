import './App.scss';
import Header from './component/Header';
import Container from 'react-bootstrap/Container';
import { ToastContainer } from 'react-toastify';
import { useContext, useEffect } from 'react';
import { UserContext } from './context/UserContext'
import AppRoutes from './route/AppRoutes'




function App() {

  const { user, loginContext } = useContext(UserContext);
  console.log('User check : ', user)
  useEffect(() => {
    if (localStorage.getItem("token")) {
      loginContext(localStorage.getItem("email"), localStorage.getItem("token"))
    }
  }, [])

  return (
    <>
      <div className='app-container'>
        <Header />
        <Container>
          <AppRoutes />
        </Container>
      </div >
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
