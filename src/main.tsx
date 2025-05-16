import { createRoot } from "react-dom/client";
import { restaurants } from "./materials/mock";

createRoot(document.getElementById("root")!).render(
  <div>
    {restaurants.map((restauran) => (
      <div
        key={restauran.id}
        style={{
          paddingLeft: "5px",
          marginBottom: "5px",
          border: "thin solid black",
        }}
      >
        <h1>{restauran.name}</h1>
        <h3>Меню</h3>
        <ul>
          {restauran.menu.map((menuItem) => (
            <li key={menuItem.id}>{menuItem.name}</li>
          ))}
        </ul>
        <h3>Отзывы</h3>
        <ul>
          {restauran.reviews.map((reviewItem) => (
            <li key={reviewItem.id}>{reviewItem.text}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);
