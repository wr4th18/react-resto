import React, { useState } from "react";
import "./menu.css";
import Categories from "./Categories";
import { useGlobalContext } from "../../context";
import { items } from "./data";
import Menu from "./Menu";

const AppMenu = () => {
  const { menuItems, filterItems } = useGlobalContext();
  const newCategories = ["all", ...new Set(items.map((item) => item.category))];
  // const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(newCategories);

  // const filterItems = (category) => {
  //   const newItems = items.filter((item) => item.category === category);
  //   if (category === "all") {
  //     setMenuItems(items);
  //   } else setMenuItems(newItems);
  // };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} categories={categories} />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  );
};

export default AppMenu;
