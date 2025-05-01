export const Positive = ({ good, all }) => {
    return (
      <div className="container">
        <h3>Positive Reviews</h3>
        {!all && <p>No feedback given</p>}
        {all>0 && good==0 && <p>0%</p> }
        {all>0 && all==good && <p>100%</p> }
        {all != good && <p>{100 * good/all}%</p>}
      </div>
    );
  };