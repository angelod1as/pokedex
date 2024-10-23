import Link from "next/link";

const links = [
  { name: "Home", href: "/dashboard" },
  // {
  //   name: "List All",
  //   href: "/dashboard/list-all",
  // },
];

export default function Navigation() {
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-orange-800 hover:text-yellow-600 md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <p className="">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
