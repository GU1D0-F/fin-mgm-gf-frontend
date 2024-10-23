import { Navigate, BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Auth from './pages/auth';
import Loading from './pages/auth/loading';

function App() {
  return (
      <Router>
        <AppContent />
      </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const isAuth = location.pathname === '/auth';

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/auth" replace />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/loading" element={<Loading />} />
    </Routes>
  );
}


export default App