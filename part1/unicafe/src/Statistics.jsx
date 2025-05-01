export const Statistics = ({ name, value }) => {
  return (
    <div className="container">
      <h3>{name}:</h3>
      <p>{`${value}${name=="Positive"?"%":""}`}</p>
    </div>
  );
};
