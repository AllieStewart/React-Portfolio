// Start of JSX
// The App itself that keeps Navigation (Header), Footer, and
// other pages continously showing without refreshing.
import './index.css';
import { Outlet } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
// End of JSX