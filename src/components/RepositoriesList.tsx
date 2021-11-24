import { useState } from "react";
import { useActions } from "../hooks/useActions";
import { useSelector } from "react-redux";

const RepositoriesList: React.FC = () => {
  const state = useSelector((state) => state);
  console.log("initial state", state);
  const [term, setTerm] = useState("");

  const { searchRepositories } = useActions();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(term);

    searchRepositories(term);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.currentTarget.value)} />
        <button>Search</button>
      </form>
    </div>
  );
};
export default RepositoriesList;
