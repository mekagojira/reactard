import Link from "next/link";

export default function Header(props) {
  return (
    <nav className="flex items-center justify-between flex-wrap p-6">
      <div className="flex items-center flex-shrink-0 mr-6">
        <Link href="/">
          <h2 className="text-xl cursor-pointer">Reactard</h2>
        </Link>
      </div>
      <div className="block lg:hidden"></div>
    </nav>
  );
}
