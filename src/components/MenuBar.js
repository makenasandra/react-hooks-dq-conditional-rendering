import React, { useState } from "react";

function MenuBar({itemClassName, handleMenuItemClick}) {
  /*

  The 'span' tags below are the menu items. Think about the way a menu 
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?

  */
  // const [itemClassName, setItemClassName] = useState({user:"item", photo: "item", cocktail:"item", themeisle:"item" })
  // function handleMenuItemClick(e){
  //   const {className} = e.target
  //   if(className ==="user large icon"){
  //     setItemClassName({user:"item active", photo: "item", cocktail:"item", themeisle:"item" })
  //   } else if(className ==="photo large icon"){
  //     setItemClassName({user:"item", photo: "item active", cocktail:"item", themeisle:"item" })
  //   } else if(className ==="cocktail large icon"){
  //     setItemClassName({user:"item", photo: "item", cocktail:"item active", themeisle:"item" })
  //   } else if(className ==="themeisle large icon"){
  //     setItemClassName({user:"item", photo: "item", cocktail:"item", themeisle:"item active" })
  //   } 
    
  // }
  


  return (
    <div className="ui four item menu">
      <span className={itemClassName.user} >
        <i className="user large icon" onClick={handleMenuItemClick}/>
      </span>

      <span className={itemClassName.photo} >
        <i className="photo large icon" onClick={handleMenuItemClick}/>
      </span>

      <span className={itemClassName.cocktail} >
        <i className="cocktail large icon" onClick={handleMenuItemClick}/>
      </span>

      <span className={itemClassName.themeisle} >
        <i className="themeisle large icon" onClick={handleMenuItemClick}/>
      </span>
    </div>
  );
}

export default MenuBar;
