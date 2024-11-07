import UseFetch from "../UseFetch";
const Movement = () => {
  const { data, error, isPending } = UseFetch(
    "http://localhost:3001/sport",
    "sport"
  );
  console.log(data);

  return <div>Movement</div>;
};

export default Movement;
