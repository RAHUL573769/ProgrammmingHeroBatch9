/* eslint-disable react/prop-types */

const developerStyle = {
  margin: "20px",
  border: "10px solid red"
};
const Student = ({ student }) => {
  console.log(student);

  return (
    <div style={developerStyle}>
      Name:{student.name}
      Grade:{student.grade}
    </div>
  );
};

export default Student;
