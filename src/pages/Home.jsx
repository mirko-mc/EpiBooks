import { AllTheBooks } from "../components/AllTheBooks/AllTheBooks";
import { Welcome } from "../components/Welcome";

export const Home = ({genre, search,category,setCategory }) => {
  return (
    <>
      <Welcome/>
      <AllTheBooks search={search} genre={genre} category={category} setCategory={setCategory}/>
    </>
  );
};
