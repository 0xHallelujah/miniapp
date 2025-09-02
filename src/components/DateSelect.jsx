import React, { useState } from "react";

export default function DateSelect({ onNext, onBack }) {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  return (
    <div>
      <h2>Выбери даты поездки</h2>
      <label>
        С: <input type="date" value={from} onChange={(e) => setFrom(e.target.value)} />
      </label>
      <br />
      <label>
        По: <input type="date" value={to} onChange={(e) => setTo(e.target.value)} />
      </label>
      <br /><br />
      <button onClick={onBack}>Назад</button>
      <button disabled={!from || !to} onClick={() => onNext({ from, to })}>Далее</button>
    </div>
  );
}
