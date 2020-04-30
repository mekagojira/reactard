import Link from "next/link";

export default function Header(props) {
  return (
    <nav className="flex items-center justify-between flex-wrap p-6">
      <div className="flex items-center flex-shrink-0 mr-6">
        <Link href="/">
          <span className="text-xl cursor-pointer">Reactard</span>
        </Link>
      </div>
      <div className="block lg:hidden"></div>
    </nav>
  );
}
