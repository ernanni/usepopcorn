import { useState } from 'react';
import {
  Box,
  ErrorMessage,
  Loader,
  Main,
  MovieDetails,
  MoviesList,
  NavBar,
  NumResults,
  SearchBar,
  Summary,
  WatchedMovieList,
} from './components';
import { useLocalStorage, useMovies } from './hooks';

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export default function App() {
  const [query, setQuery] = useState('');
  const [selectedId, setSelectedId] = useState(null);
  const [watched, setWatched] = useLocalStorage([], 'watched');

  const { movies, isLoading, error } = useMovies(query);

  /* -- useEffect on Component lifecycle --
  useEffect(() => {
    console.log('After initial render');
  }, []);

  useEffect(() => {
    console.log('After every render');
  });

  useEffect(() => {
    console.log('After query opdates');
  }, [query]);

  console.log('During render');
*/

  function handleSelectMovie(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleAddWatchedMovie(movie) {
    setWatched((watched) => [...watched, movie]);
  }

  function handleRemoveWatchedMovie(imdbID) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== imdbID));
  }

  return (
    <>
      <NavBar>
        <SearchBar query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MoviesList onSelectMovie={handleSelectMovie} movies={movies} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              watched={watched}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatchedMovie}
            />
          ) : (
            <>
              <Summary average={average} watched={watched} />
              <WatchedMovieList
                watched={watched}
                onRemoveWatchedMovie={handleRemoveWatchedMovie}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
