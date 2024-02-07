/* eslint-disable react/prop-types */
const SingleActor = ({ actor }) => {
  const actorStyle = {
    margin: "2px",
    border: "10px solid red"
  };
  return (
    <div style={actorStyle}>
      <h1>Actor Name:{actor}</h1>
    </div>
  );
};

export default SingleActor;
