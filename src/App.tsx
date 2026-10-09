import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import AnalyzerPage from './pages/AnalyzerPage'
import ViralPage from './pages/ViralPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/analyzer" element={<AnalyzerPage />} />
      <Route path="/viral" element={<ViralPage />} />
      <Route path="*" element={<Home />} />
    </Routes>
  )
}
