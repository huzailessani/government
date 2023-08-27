import Image from "next/image";
import {
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineInsurance,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import { BsPeople, BsSkipStartCircle, BsLink45Deg } from "react-icons/bs";
import { BiPhotoAlbum, BiMap } from "react-icons/bi";
import { SiOpenapiinitiative } from "react-icons/si";
import { TiContacts, FiMail } from "react-icons/ti";
import { GrSystem, GrServices, GrEmptyCircle, GrNotes, GrMultimedia } from "react-icons/gr";
import { GiSwordsPower } from "react-icons/gi";
import { FaPeopleGroup, FaChild, FaSitemap } from "react-icons/fa";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import Link from "next/link";
import { useContext } from "react";
import { SidebarContext } from "@/context/SidebarContext";
import { useRouter } from "next/router";


const sidebarItems = [
  {
    name: "Home",
    href: "/",
    icon: AiOutlineHome,
  },

  {
    name: "Our Value System",
    href: "/OurValueSystem",
    icon: GrSystem,
  },

  {
    name: "Our Service Charter",
    href: "/OurServiceCharter",
    icon: GiSwordsPower,
  },

  {
    name: "What's New",
    href: "/WhatsNew",
    icon: BsSkipStartCircle,
  },

  {
    name: "Vacancies",
    href: "/Vacancies",
    icon: GrEmptyCircle,
  },
  {
    name: "International Ombudsman Institute",
    href: "/InternationalOmbudsman",
    icon: SiOpenapiinitiative,
  },
  {
    name: "Tenders",
    href: "/Tenders",
    icon: AiOutlineProject,
  },
  {
    name: "Links",
    href: "/Links",
    icon: BsLink45Deg,
  },
  {
    name: "Photo Gallery",
    href: "/PhotoGallery",
    icon: BiPhotoAlbum,
  },

  {
    name: "Contact Us",
    href: "/contact",
    icon: TiContacts,
  },
  {
    name: "Site Map",
    href: "/SiteMap",
    icon: FaSitemap,
  },
];


const Sidebar = () => {
  const router = useRouter();
  const { isCollapsed, toggleSidebarcollapse } = useContext(SidebarContext);

  return (
    <div className="sidebar__wrapper">
      <button className="btn" onClick={toggleSidebarcollapse}>
        {isCollapsed ? <MdKeyboardArrowRight /> : <MdKeyboardArrowLeft />}
      </button>
      <aside className="sidebar" data-collapse={isCollapsed}>
        <div className="sidebar__top">
          <Image
            width={80}
            height={80}
            className="sidebar__logo"
            src="/logo.png"
            alt="logo"
          />
          <p className="sidebar__logo-name">The Brave Coders</p>
        </div>
        <ul className="sidebar__list">
          {sidebarItems.map(({ name, href, icon: Icon }) => {
            return (
              <li className="sidebar__item" key={name}>
                <Link
                  className={`sidebar__link ${router.pathname === href ? "sidebar__link--active" : ""
                    }`}
                  href={href}
                >
                  <span className="sidebar__icon">
                    <Icon />
                  </span>
                  <span className="sidebar__name">{name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
