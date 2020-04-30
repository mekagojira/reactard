import HomePage from "./components/HomePage";
import AppContext from "../shared/context/AppContext";
import { useContext, useEffect } from "react";

export default function HomePageContainer(props) {
  const app = useContext(AppContext);
  useEffect(() => {
    app.title.setTitle("Trang chủ");
  }, []);

  return <HomePage {...props} />;
}
