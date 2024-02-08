import { useLoaderData } from "react-router-dom";
const UserDetails = () => {
  const user = useLoaderData();
  console.log(user);
  return (
    <div>
      <h1>
        Details About:
        <br />
        {user.title}
      </h1>
    </div>
  );
};

export default UserDetails;
