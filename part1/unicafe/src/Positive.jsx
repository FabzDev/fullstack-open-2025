export const Positive = ({ good, all }) => {
    return (
      <div className="container">
        <h3>Positive Reviews</h3>
        {<p>{100 * good/all}%</p>}
      </div>
    );
  };