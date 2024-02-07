import { useState } from "react";
import Title from "./Title";
import menu from './data';
import Menu from "./Menu";
import Categories from "./Categories";

const allCategories = ["all",...new Set(menu.map((items)=>{
  return items.category;
}))]


function App() {

  const [menuItems,setMenuItems] = useState(menu);

  const filterCategory = (category) => {
    if(category === 'all')
    {
      setMenuItems(menu);
      return;
    }
    const newItems = menu.filter((items)=>{
      return items.category === category;
    })
    setMenuItems(newItems);
  }

  return (
    <main>
      <section className="menu">
        <Title />
        <Categories categories={allCategories} filterCategory={filterCategory}/>
        <Menu menuItems={menuItems} />
    </section>
    </main>
  );
}

export default App;
