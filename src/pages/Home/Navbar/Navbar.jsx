import { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgMenuRightAlt } from "react-icons/cg";
import DropDown from "./DropDown";
import { useScroll, motion, useMotionValueEvent } from "framer-motion";
import Button from "../../../components/html/Button";
import CartCountIcon from "../../../components/shared/CartCountIcon";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  const { pathname } = useLocation();
  const navigate = useNavigate();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prevValue = scrollY.getPrevious();

    if (latest > prevValue && latest > 30) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const navItems = [
    {
      name: "Home",
      slug: "/",
    },

    {
      name: "Cart",
      slug: "/cart",
    },
    {
      name: "Checkout",
      slug: "/checkout",
    },
  ];

  return (
    <motion.div
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 z-[12] w-full ${
        pathname === "/login" || pathname === "/signup" ? "hidden" : ""
      } h-max bg-white`}
    >
      <nav
        className={`px-[5%] flex justify-between  py-4 items-center overflow-hidden shadow-sm text-black z-10 `}
      >
        {/* Logo */}
        <div className="w-max flex items-center gap-3">
          <Link to="/" className="text-lg  font-clashBold sm:text-xl">
            ShoeSphere
          </Link>
        </div>

        <div className="flex justify-end gap-8 w-[70%]">
          {/* NavItems */}
          <ul className="hidden lg:flex justify-center gap-6  font-clashRegular items-center pl-[5%]">
            {navItems.map(({ name, slug }) => (
              <li key={name}>
                <NavLink
                  to={slug}
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-2 text-primary border-primary text-[14px]"
                      : "nav-button duration-300 text-[14px]"
                  }
                >
                  {name}
                </NavLink>{" "}
              </li>
            ))}
          </ul>

          {/* Profile and Cart */}

          <div className="flex justify-end items-center gap-4  md:w-[80%] lg:w-max">
            <CartCountIcon />

            <div className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] rounded-full border border-black "></div>

            <Button
              onClick={() => navigate("/login")}
              className={`text-[12px] text-white md:text-sm px-4 md:px-3 font-clashRegular py-1 md:py-2 bg-black`}
            >
              Sign In
            </Button>

            <CgMenuRightAlt
              className="text-xl md:hidden "
              onClick={() => setMenu(!menu)}
            />
          </div>
        </div>
        <DropDown menu={menu} setMenu={setMenu} navItems={navItems} />
      </nav>
    </motion.div>
  );
};

export default Navbar;
