import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import TicketSelectionPage from './pages/price';
import PaymentPage from './pages/payment';
import TicketConfirmationPage from './pages/ticketConf';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/select-tickets" element={<TicketSelectionPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/confirmation" element={<TicketConfirmationPage />} />
      </Routes>
    </Router>
  );
}

export default App;