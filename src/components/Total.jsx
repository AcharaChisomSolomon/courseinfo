const Total = ({parts}) => {
  return (
    <b>
      Number of exercises{" "}
      {parts.reduce((a, c) => a + c.exercises, 0)}
    </b>
  );
};

export default Total