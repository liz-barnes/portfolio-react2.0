import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className='navbar'>
      <NavLink to='/about' className='navbar-item'>about</NavLink>
      <NavLink to='/work' className='navbar-item'>work</NavLink>
      <NavLink to='/resume' className='navbar-item'>resume</NavLink>
      <NavLink to='/contact' className='navbar-item'>contact</NavLink>
    </nav>
  );
}
