import { AllTheBooks } from "../components/AllTheBooks/AllTheBooks";
import { Welcome } from "../components/Welcome";

export const Home = ({genre, search }) => {
  return (
    <>
      <Welcome/>
      <AllTheBooks search={search} genre={genre} />
    </>
  );
};
