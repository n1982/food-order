import { createRoot } from "react-dom/client";
import { restaurants } from "./materials/mock";

createRoot(document.getElementById("root")!).render(
  <div>
    {restaurants.map(({ id, name, menu, reviews }) => (
      <div
        key={id}
        style={{
          paddingLeft: "5px",
          marginBottom: "5px",
          border: "thin solid black",
        }}
      >
        <h1>{name}</h1>
        <h3>Меню</h3>
        <ul>
          {menu.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
        <h3>Отзывы</h3>
        <ul>
          {reviews.map(({ id, text }) => (
            <li key={id}>{text}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);
