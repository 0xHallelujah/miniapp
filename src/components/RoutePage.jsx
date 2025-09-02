import React, { useEffect, useState } from "react";
import RouteMap from "./RouteMap";

export default function RoutePage({ city, days }) {
  const [route, setRoute] = useState(null);

  useEffect(() => {
    fetch(
      `https://localhost:5001/api/routes/generate-route-map?city=${city}&days=${days}`
    )
      .then((res) => res.json())
      .then((data) => setRoute(data))
      .catch((err) => console.error(err));
  }, [city, days]);

  if (!route) return <p>Генерация маршрута...</p>;

  return (
    <div>
      <h2>Маршрут: {city}</h2>
      {route.days.map((day) => (
        <div key={day.day}>
          <h3>День {day.day}</h3>
          <ul>
            {day.items.map((item, idx) => (
              <li key={idx}>
                {item.time} – {item.place} ({item.address}) [{item.duration}]
              </li>
            ))}
          </ul>
          <RouteMap items={day.items} />
        </div>
      ))}
    </div>
  );
}
