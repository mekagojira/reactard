import Link from "next/link";

export default function Header(props) {
  return (
    <nav className="flex items-center justify-between flex-wrap p-6">
      <div className="flex items-center flex-shrink-0 mr-6">
        <Link href="/">
          <a className="flex items-center">
            <img src="/go.png" alt="Reactard" className="h-12 mr-2" />
            <h2 className="text-xl cursor-pointer">Reactard</h2>
          </a>
        </Link>
      </div>
      <div className="block lg:hidden"></div>
    </nav>
  );
}
