import React, { useState } from "react";  
import MenuIcon from "@mui/icons-material/Menu";  
import styles from "./SideBar.module.css";  
import HomeIcon from "@mui/icons-material/Home";  
import WhatshotIcon from "@mui/icons-material/Whatshot";  
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";  
import QueueIcon from "@mui/icons-material/Queue";  
import HistoryIcon from "@mui/icons-material/History";  
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";  

export default function SideBar() {  
  const [activeItem, setActiveItem] = useState(null); // Change here  

  const handleClick = (item) => {  
    setActiveItem(item); 
  };  

  return (  
    <div className={styles.outer}>  
      <div onClick={() => handleClick("home")}>  
        <MenuIcon fontSize="large" className={styles.menu}/>  
      </div>  
      <div className={styles.menuItems}>  
        <div onClick={() => handleClick("home")}>  
          <HomeIcon  
            fontSize="medium"  
            className={`${styles.menuItem} ${activeItem === "home" ? styles.active : ""}`} 
          />  
        </div>  

        <div onClick={() => handleClick("trending")}>  
          <WhatshotIcon  
            fontSize="medium"  
            className={`${styles.menuItem} ${activeItem === "trending" ? styles.active : ""}`}   
          />  
        </div>  

        <div onClick={() => handleClick("subscriptions")}>  
          <SubscriptionsIcon  
            fontSize="medium"  
            className={`${styles.menuItem} ${activeItem === "subscriptions" ? styles.active : ""}`}
          />  
        </div>  

        <div onClick={() => handleClick("queue")}>  
          <QueueIcon  
            fontSize="medium"  
            className={`${styles.menuItem} ${activeItem === "queue" ? styles.active : ""}`}  
          />  
        </div>  

        <div onClick={() => handleClick("history")}>  
          <HistoryIcon  
            fontSize="medium"  
            className={`${styles.menuItem} ${activeItem === "history" ? styles.active : ""}`} 
          />  
        </div>  

        <div onClick={() => handleClick("liked")}>  
          <ThumbUpOffAltIcon  
            fontSize="medium"  
            className={`${styles.menuItem} ${activeItem === "liked" ? styles.active : ""}`}
          />  
        </div>  
      </div>  
    </div>  
  );  
}