const Section = ({ elem }) => {
  return (
    <div>
      <h1>{elem.category}</h1>
      <div className="movie">
        {elem.images.map((url) => {
          return <img key={url} src={url} alt="img-movies" />;
        })}
      </div>
    </div>
  );
};
export default Section;
