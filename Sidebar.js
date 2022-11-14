import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <FontAwesomeIcon icon={faCoffee} />,
    cName: "nav-text"
  },
  {
    title: "Reports",
    path: "/reports",
    icon: <FontAwesomeIcon icon={faCoffee} />,
    cName: "nav-text"
  },
  {
    title: "Products",
    path: "/products",
    icon: <FontAwesomeIcon icon={faCoffee} />,
    cName: "nav-text"
  },
  {
    title: "Team",
    path: "/team",
    icon: <FontAwesomeIcon icon={faCoffee} />,
    cName: "nav-text"
  },
  {
    title: "Messages",
    path: "/",
    icon: <FontAwesomeIcon icon={faCoffee} />,
    cName: "nav-text"
  },
  {
    title: "Support",
    path: "/support",
    icon: <FontAwesomeIcon icon={faCoffee} />,
    cName: "nav-text"
  }
];
