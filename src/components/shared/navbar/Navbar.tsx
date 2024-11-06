import Link from "next/link";
import Logo from "../icons/Logo";

const Navbar = () => {
  const navItems = [
    { title: "Home", route: "/home" },
    { title: "About us", route: "/about-us" },
    { title: "Services", route: "/services" },
    { title: "Projects", route: "/projects" },
    { title: "Blogs", route: "/blogs" },
    { title: "Contact us", route: "/contact-us" },
  ];

  return (
    <header>
      <div className="container mx-auto py-3">
        <div className="flex items-center justify-between">
          <div className="">
            <Logo width={125} className="h-16" />
          </div>

          <div className="flex items-center gap-10">
            <div className="">
              {navItems.map((item, idx) => (
                <Link key={idx} href={item.route} className="capitalize px-4">
                  {item.title}
                </Link>
              ))}
            </div>
            <button className="rounded-full py-2.5 px-6 bg-gradient-to-tr from-secondary_one to-secondary_two ">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
