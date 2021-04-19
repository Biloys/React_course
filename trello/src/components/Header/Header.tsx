import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { AppRoute, routes } from "../App";

import styles from "./header.module.scss";

interface HeaderProps {
  logOut?: any;
}

export const Header: FunctionComponent<HeaderProps> = ({
  logOut,
}: HeaderProps) => {
  return (
    <header>
      <div className={styles.header}>
        {routes.map((route: AppRoute, i: number) =>
          route.isHidden ? null : (
            <Link key={i} className={styles.link} to={route.path}>
              {route.title}
            </Link>
          )
        )}
        <button onClick={logOut}>Log out</button>
      </div>
    </header>
  );
};
