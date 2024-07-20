import { AllTheBooks } from "../components/AllTheBooks/AllTheBooks";
import { Welcome } from "../components/Welcome";

export const Home = ({resultSearch }) => {
  return (
    <>
      <Welcome/>
      <AllTheBooks resultSearch={resultSearch}/>
    </>
  );
};
