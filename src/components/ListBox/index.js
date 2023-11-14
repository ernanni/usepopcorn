import { useState } from 'react';
import MoviesList from '../MoviesList';

export default function ListBox({ movies }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? '–' : '+'}
      </button>
      {isOpen && <MoviesList movies={movies} />}
    </div>
  );
}
