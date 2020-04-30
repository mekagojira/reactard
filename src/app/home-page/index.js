import HomePage from "./components/HomePage";
import AppContext from "../shared/context/AppContext";
import { useContext, useEffect } from "react";
import { getBlogEntries } from "../../services/contentful";

export default function HomePageContainer(props) {
  const app = useContext(AppContext);
  useEffect(() => {
    app.title.setTitle("Trang chủ");
  }, []);

  return <HomePage {...props} />;
}

export const getServerSideProps = async (context) => {
  const data = await getBlogEntries();

  return {
    props: { data: JSON.parse(JSON.stringify(data)) },
  };
};
