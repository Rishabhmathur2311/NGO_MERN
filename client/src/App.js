import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,  Routes, Route } from "react-router-dom";
import TabWindow from './signUp/TabWindow.js';
import MainPage from './signUp/MainPage.js';
import CauseForm from './context/cause/CauseForm.js';
import Payment from './payment/Payment.js';
import { Box } from '@chakra-ui/react';
// import Profile from './step/Step.js';
function App() {
  return (
    <Box className="App">
    <Router>
    <Routes>
    <Route path="/" element={<TabWindow />} />
    <Route path="/mainPage" element={<MainPage />} />
    <Route path="/newCause" element={<CauseForm />} />
    <Route path="/Payment" element={<Payment />} />
    {/* <Route path="/Step" element={<Profile />} /> */}
    </Routes>        
  </Router>
  </Box>
  );
}

export default App;
