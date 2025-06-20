import React from "react";

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((menuItem) => {
        const { id, title, img, desc, price } = menuItem;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo img" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">₦{price}</h4>
                <p className="item-text">{desc}</p>
              </header>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
