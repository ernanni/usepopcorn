import SearchBar from '../SearchBar';
import Logo from '../Logo';
import NumResults from '../NumResults';

export default function NavBar({ movies }) {
  return (
    <nav className="nav-bar">
      <Logo />
      <SearchBar />
      <NumResults movies={movies} />
    </nav>
  );
}
