import { useState } from "react";
import logo from "../assets/imags/logo.png";
import { Link } from "react-router-dom";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { NavBarLinks } from "../utils";
import NavBarLink from "./NavBarLink";

import {motion} from "framer-motion"
import HandMade from "./HandMade";
import useLang from "../store/useLang";

function NavBar() {
  const [open, setOpen] = useState(false);
  const {langs,lang,langSelected,setLangSelected}=useLang()


  return (
    <div className="container h-32 p-4 md:px-8  md:py-8 mx-auto flex justify-between items-start ">
      <div className="flex-1 flex ">
        <Link to={"/"}>
          <img
            draggable={false}
            className="w-14 lg:w-20 mix-blend-darken"
            src={logo}
            alt="Cactusia Logo"
            title="Cactusia"
          />
        </Link>
      </div>
      <div className="flex-1 flex  justify-end">
        <button
        className=" mr-20 text-xl text-white uppercase font-semibold w-12 bg-green h-12 md:w-16 md:h-16 hover:text-white rounded-full  duration-200  hover:scale-105"
        onClick={setLangSelected}
        >
          {langs[langSelected]}
        </button>
        <button
          onClick={() => setOpen((p) => !p)}
          className={
            (open ? " bg-dark-white " : " bg-green ") +
            " fixed w-12 h-12 md:w-16 md:h-16 hover:text-white rounded-full z-50 duration-200  hover:scale-105"
          }
        >
          {open ? (
            <CloseRoundedIcon sx={{ color: "#768F6A", fontSize: 35 }} />
          ) : (
            <MenuRoundedIcon sx={{ color: "#fff", fontSize: 30 }} />
          )}
        </button>
      </div>
      <motion.div
        className={
          " w-[100vw] h-[100vh] ease-in duration-300 fixed bg-green-noise top-0 z-40 flex items-center justify-start "
          +(open?"left-0":"left-[100vw]")
        }
      >
        <ul className="ml-4 md:ml-10 flex flex-col gap-6 justify-center items-start uppercase font-semibold">
          {NavBarLinks.map((link, index) => (
            <NavBarLink
              open={open}
              key={index}
              luncher={open}
              label={lang.filter(f=>f.id_phrase==link.id)[0][langs[langSelected]]}
              link={link.label}
              delay={link.delay}
            />
          ))}
        </ul>
        <div className="absolute -bottom-20 -right-20">
          <HandMade/>
        </div>
      </motion.div>
    </div>
  );
}

export default NavBar;
