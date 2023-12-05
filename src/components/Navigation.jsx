// Start of JSX file
// Navigation for links to other pages without reloading.
import { Link } from 'react-router-dom';
import Header from './Header';

export default function Navigation() {
  return (
    <Header
      links={[
        <Link key={1} className="nav-link mx-4" to="/">
          About Me
        </Link>,
        <Link key={2} className="nav-link mx-4" to="/portfolio">
          Portfolio
        </Link>,
        <Link key={3} className="nav-link mx-4" to="/contact">
          Contact
        </Link>,
        <Link key={4} className="nav-link mx-4" to="/resume">
          Resume
        </Link>,
      ]}
    />
  );
}
// End of JSX file