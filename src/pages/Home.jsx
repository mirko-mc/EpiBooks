import { AllTheBooks } from "../components/AllTheBooks/AllTheBooks";
import { Welcome } from "../components/Welcome";

export const Home = ({ search }) => {
  return (
    <>
      <Welcome />
      <AllTheBooks search={search} />
    </>
  );
};
