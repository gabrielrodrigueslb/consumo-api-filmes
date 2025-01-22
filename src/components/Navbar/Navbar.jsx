import { MdLocalMovies } from 'react-icons/md';
import './index.scss';

export default function Navbar() {
  return (
    <nav className="navbar">
      <MdLocalMovies className='icon'/>
      <h1 className="page-title"> Filmes</h1>
    </nav>
  );
}
