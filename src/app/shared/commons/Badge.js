export default function Badge(props) {
  return (
    <div className="inline-block bg-teal-500 text-white italic px-2 py-1/2 rounded rounded-full">
      {props.children}
    </div>
  );
}
