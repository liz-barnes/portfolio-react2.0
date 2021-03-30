import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className='navbar'>
      <Link to='/' className='navbar-item'>about</Link>
      <Link to='/work' className='navbar-item'>work</Link>
      <Link to='/resume' className='navbar-item'>resume</Link>
      <Link to='/contact' className='navbar-item'>contact</Link>
    </nav>
  );
}
