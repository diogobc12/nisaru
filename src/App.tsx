// Using JSX requires React to be in scope
// This comment ensures ESLint doesn't complain about unused imports
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Donation from './components/Donation';
import Contact from './components/Contact';
import Footer from './components/Footer';

function MainLayout() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-gray-800">
      <Header />
      <main>
        <Hero />
        <Mission />
        <Donation />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Success() {
  return (
    <div className="min-h-screen bg-emerald-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-emerald-800 mb-4">Thank You!</h1>
        <p className="text-gray-600 mb-6">Your donation has been processed successfully.</p>
        <a
          href="/"
          className="inline-block bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
        >
          Return Home
        </a>
      </div>
    </div>
  );
}

function Cancel() {
  return (
    <div className="min-h-screen bg-emerald-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Payment Cancelled</h1>
        <p className="text-gray-600 mb-6">Your donation was not processed. Please try again if you'd like to support us.</p>
        <a
          href="/"
          className="inline-block bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
        >
          Return Home
        </a>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} />
      <Route path="/success" element={<Success />} />
      <Route path="/cancel" element={<Cancel />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;