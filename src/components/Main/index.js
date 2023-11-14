import ListBox from '../ListBox';
import WatchedBox from '../WatchedBox';

export default function Main({ movies, watched, average }) {
  return (
    <main className="main">
      <ListBox movies={movies} />
      <WatchedBox watched={watched} average={average} />
    </main>
  );
}
