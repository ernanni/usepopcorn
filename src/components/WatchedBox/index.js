import { useState } from 'react';
import Summary from '../Summary';
import WatchedMovieList from '../WatchedMovieList';

export default function WatchedBox({ watched, average }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? '–' : '+'}
      </button>
      {isOpen && (
        <>
          <Summary average={average} watched={watched} />
          <WatchedMovieList watched={watched} />
        </>
      )}
    </div>
  );
}
