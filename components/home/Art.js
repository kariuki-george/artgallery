import React from "react";
import Artwork from "./Artwork.js";
import styles from "./Art.module.scss";

function Art() {
  const list = [
    {
      id: 1,
      name: "html and css",
      price: 1000,
      imageurl:
        "https://images.unsplash.com/photo-1644424360940-01210d718201?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM3fGJEbzQ4Y1Vod25ZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      category: 1,
      designer: "willy",
    },
    {
      id: 2,
      name: "html and css",
      price: 1000,
      imageurl:
        "https://images.unsplash.com/photo-1643810003625-113bab1a490d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDUwfGJEbzQ4Y1Vod25ZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      category: 1,
      designer: "gab",
    },
    {
      id: 3,
      name: "html and css",
      price: 1000,
      imageurl:
        "https://images.unsplash.com/photo-1643903658678-fdd2f0bf673c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDU3fGJEbzQ4Y1Vod25ZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      category: 1,
      designer: "shir",
    },

    {
      id: 4,
      name: "html and css",
      price: 1000,
      imageurl:
        "https://images.unsplash.com/photo-1643682799999-b4fce7589327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDYxfGJEbzQ4Y1Vod25ZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      category: 1,
      designer: "thuo",
    },
    {
      id: 5,
      name: "html and css",
      price: 1000,
      imageurl:
        "https://images.unsplash.com/photo-1643552301921-0e719c172bc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDY3fGJEbzQ4Y1Vod25ZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      category: 1,
      designer: "blah",
    },
    {
      id: 6,
      name: "html and css",
      price: 1000,
      imageurl:
        "https://images.unsplash.com/photo-1643391537211-2b920295cf86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDc0fGJEbzQ4Y1Vod25ZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      category: 1,
      designer: "coco",
    },
  ];
  return (
    <div className={styles.art}>
      {list.map((art) => {
        return (
          <Artwork
            key={art.id}
            id={art.id}
            imageurl={art.imageurl}
            designer={art.designer}
          />
        );
      })}
    </div>
  );
}

export default Art;
