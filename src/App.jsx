import React, { useEffect, useState } from "react";
import RoutePage from "./components/RoutePage";
import WebApp from "@twa-dev/sdk";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    WebApp.ready();
    setUser(WebApp.initDataUnsafe?.user);
  }, []);

  if (!user) return <p>Загрузка...</p>;

  return (
    <div style={{ padding: 16 }}>
      <h1>Привет, {user.first_name}!</h1>
      <RoutePage city="Санкт-Петербург" days={2} />
    </div>
  );
}
