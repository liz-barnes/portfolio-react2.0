import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <Link to='/about'>about</Link>
      <Link to='/work'>work</Link>
      <Link to='/resume'>resume</Link>
      <Link to='/contact'>contact</Link>
    </nav>
  );
}
