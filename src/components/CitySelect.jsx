import React, { useState } from "react";

export default function CitySelect({ onNext }) {
  const [city, setCity] = useState("");

  const cities = ["Москва", "Санкт-Петербург", "Казань", "Сочи"];

  return (
    <div>
      <h2>Выбери город</h2>
      <select value={city} onChange={(e) => setCity(e.target.value)}>
        <option value="">-- выбери --</option>
        {cities.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>

      <br /><br />
      <button disabled={!city} onClick={() => onNext(city)}>Далее</button>
    </div>
  );
}
