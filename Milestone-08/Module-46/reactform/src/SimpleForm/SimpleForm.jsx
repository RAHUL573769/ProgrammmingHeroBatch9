const SimpleForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    console.log(name, email);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <input type="text" name="name" id="" />

        <br />
        <input type="email" name="email" id="" />

        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SimpleForm;
