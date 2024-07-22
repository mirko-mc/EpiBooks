import { AllTheBooks } from "../components/AllTheBooks/AllTheBooks";
import { Welcome } from "../components/Welcome";

export const Home = ({ resultSearch, setItemForPage, itemForPage }) => {
  return (
    <>
      <Welcome />
      <AllTheBooks
        resultSearch={resultSearch}
        setItemForPage={setItemForPage}
        itemForPage={itemForPage}
      />
    </>
  );
};
