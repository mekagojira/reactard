import Link from "next/link";

export default function Header(props) {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-app p-6 shadow-xl">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link href="/">
          <span className="font-light text-xl cursor-pointer">Reactard</span>
        </Link>
      </div>
      <div className="block lg:hidden"></div>
    </nav>
  );
}
