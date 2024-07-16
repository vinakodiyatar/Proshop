import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./componets/Header";
import Footer from "./componets/Footer";
const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
      <ToastContainer/>
    </>
  );
};

export default App;
