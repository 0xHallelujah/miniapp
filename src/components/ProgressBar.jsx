import React from "react";

export default function ProgressBar({ step, total }) {
  const percent = Math.round((step / total) * 100);

  return (
    <div style={{ margin: "16px 0" }}>
      <p>Шаг {step} из {total}</p>
      <div style={{ 
        background: "#ddd", 
        height: "8px", 
        borderRadius: "4px", 
        overflow: "hidden" 
      }}>
        <div
          style={{
            width: `${percent}%`,
            height: "8px",
            background: "#1E90FF",
            transition: "width 0.3s ease"
          }}
        />
      </div>
    </div>
  );
}
