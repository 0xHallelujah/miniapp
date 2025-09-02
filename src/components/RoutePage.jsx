import React, { useEffect, useState } from "react";
import RouteMap from "./RouteMap";

export default function RoutePage({ city, dates, interests }) {
  const [route, setRoute] = useState(null);

  useEffect(() => {
    const query = new URLSearchParams({
      city,
      from: dates.from,
      to: dates.to,
      interests: interests.join(","),
    });

    fetch(`https://localhost:5001/api/routes/generate-route-map?${query}`)
      .then((res) => res.json())
      .then((data) => setRoute(data))
      .catch((err) => console.error(err));
  }, [city, dates, interests]);

  if (!route) return <p>Генерация маршрута...</p>;

  return (
    <div>
      <h2>{city}</h2>
      <p>с {dates.from} по {dates.to}</p>
      <p>Интересы: {interests.join(", ")}</p>

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
