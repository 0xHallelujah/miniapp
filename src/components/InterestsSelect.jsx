import React, { useState } from "react";

export default function InterestsSelect({ onNext, onBack }) {
  const options = ["Музеи", "Природа", "Еда", "Шоппинг", "Ночная жизнь"];
  const [selected, setSelected] = useState([]);

  const toggle = (interest) => {
    setSelected((prev) =>
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
    );
  };

  return (
    <div>
      <h2>Выбери интересы</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {options.map((opt) => (
          <label key={opt}>
            <input
              type="checkbox"
              checked={selected.includes(opt)}
              onChange={() => toggle(opt)}
            />
            {opt}
          </label>
        ))}
      </div>
      <br />
      <button onClick={onBack}>Назад</button>
      <button disabled={selected.length === 0} onClick={() => onNext(selected)}>Далее</button>
    </div>
  );
}
