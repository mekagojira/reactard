import Header from "./Header";

export default function Root(props) {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="p-6">{props.children}</div>
    </div>
  );
}
