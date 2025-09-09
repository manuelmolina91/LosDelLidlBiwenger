import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthProvider';
import { PrivateRoute } from './PrivateRoute';
import Login from './Login';
import Dashboard from './Dashboard';
import DashboardViewOnly from './DashboardViewOnly';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } />
          <Route path="/view" element={<DashboardViewOnly />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;