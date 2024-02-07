import Item from "./Item.js";

const Menu = ({menuItems}) => {
    return (
        <div className="section-center">
            {menuItems.map((item)=>{
                return <Item key={item.id} {...item} />
            })
            }
        </div>
    );
}

export default Menu;