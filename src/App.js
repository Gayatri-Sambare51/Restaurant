import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
import logo from "./logo.JPG";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];
const list = [
  "Coupon 20% off on buttermilk pancakes", "Coupon 15% off on godzilla milkshake", "Coupon 10% off on egg attack ", "Coupon 30% off oreo dream"
]
const App = () => {

  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setMenuItems(items);
      return;
    }

    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <div className="mx-auto flex flex-col justify-center max-w-sm">

        <h1 className="text-3xl font-bold underline">
          Offers
        </h1>
        <div class="wrapper">
          <ul className="flex flex-row gap-4 overflow-y-auto">
            {
              list.map((item) => (
                <li className="px-4 py-2 bg-gray-800 rounded-full text-white">
                  {item}
                </li>
              ))
            }
          </ul>
        </div>
      </div>
      <section className="menu section">
        <div className="title">
          <img src={logo} alt="logo" className="logo" />
          <h2>Menu List</h2>
          <div className="underline"></div>
        </div>
        <Categories
          categories={categories}
          activeCategory={activeCategory}
          filterItems={filterItems}
        />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};
export default App;