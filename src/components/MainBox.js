import React, {useState} from "react";
import MenuBar from "./MenuBar";
import { Profile, Photos, Cocktails, Pokemon } from "./pages";

function MainBox() {
  /*
    Replace the code below! Depending on what menu item is selected in the menu, 
    I should render either a Profile, Photos, Cocktails, or Pokemon component.
    Think of a way to track which menu item was selected. 
    - Which component should have state? 
    - Which component should have methods to control state? 
    - Where should these methods be called?
  */
  
  const [itemClassName, setItemClassName] = useState({ user: "item active", photo: "item", cocktail: "item", themeisle: "item" });
  const [pageToDisplay, setPageToDisplay] = useState(<Profile />);
  let detailsToDisplay = <Profile />;;
  function handleMenuItemClick(e) {
    const { className } = e.target
    if (className === "user large icon") {
      setItemClassName({ user: "item active", photo: "item", cocktail: "item", themeisle: "item" });
      setPageToDisplay(<Profile />);
    } else if (className === "photo large icon") {
      setItemClassName({ user: "item", photo: "item active", cocktail: "item", themeisle: "item" });
      setPageToDisplay(<Photos />);

    } else if (className === "cocktail large icon") {
      setItemClassName({ user: "item", photo: "item", cocktail: "item active", themeisle: "item" })
      setPageToDisplay(<Cocktails />);

    } else if (className === "themeisle large icon") {
      setItemClassName({ user: "item", photo: "item", cocktail: "item", themeisle: "item active" })
      setPageToDisplay(<Pokemon />);

    }
  }


  return (
    <div>
      <MenuBar itemClassName={itemClassName} handleMenuItemClick={handleMenuItemClick} />
      {pageToDisplay}
    </div>
  );
}

export default MainBox;
