// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Home", href: "/dashboard" },
  {
    name: "Invoices",
    href: "/dashboard/invoices",
  },
  { name: "Customers", href: "/dashboard/customers" },
];

export default function Navigation() {
  return (
    <>
      {links.map((link) => {
        return (
          <a
            key={link.name}
            href={link.href}
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-orange-800 hover:text-yellow-600 md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <p className="">{link.name}</p>
          </a>
        );
      })}
    </>
  );
}
