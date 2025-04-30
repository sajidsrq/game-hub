import userGenres, { Genre } from "../hooks/useGenres";

const GenreList = () => {
  const { data } = userGenres();
  return (
    <ul>
      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};
export default GenreList;
