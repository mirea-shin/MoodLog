import { Routes, Route } from 'react-router-dom';
import AuthPage from './pages/auth/AuthPage';
import MoodLogPage from './pages/moodLog/MoodLogPage';

import Layout from './shared/components/ui/Layout';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<AuthPage />} />
        <Route path="/moodLog" element={<MoodLogPage />} />
      </Route>
    </Routes>
  );
}
