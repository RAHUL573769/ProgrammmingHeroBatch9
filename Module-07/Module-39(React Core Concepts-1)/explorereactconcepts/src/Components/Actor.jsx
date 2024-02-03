/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import SingleActor from "./SingleActor";

const Actor = ({ actors }) => {
  console.log(actors);
  return (
    <div>
      {actors.map((actor) => (
        <SingleActor key={actor.name} actor={actor}></SingleActor>
      ))}
    </div>
  );
};

export default Actor;
