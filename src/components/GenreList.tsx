import useGenres from '../hooks/useGenres';

const GenreList = () => {
  const { genres, error, isLoading } = useGenres();

  return (
    <ul>
      {genres.map((genre) => {
        return <li key={genre.id}>{genre.name}</li>;
      })}
    </ul>
  );
};

export default GenreList;
