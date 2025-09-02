import React, { useEffect, useState } from "react";
import WebApp from "@twa-dev/sdk";
import CitySelect from "./components/CitySelect";
import DateSelect from "./components/DateSelect";
import InterestsSelect from "./components/InterestsSelect";
import RoutePage from "./components/RoutePage";
import ProgressBar from "./components/ProgressBar";
import "./App.css"; // добавим стили для анимации

export default function App() {
  const [user, setUser] = useState(null);
  const [step, setStep] = useState(1);

  const [city, setCity] = useState(null);
  const [dates, setDates] = useState({ from: "", to: "" });
  const [interests, setInterests] = useState([]);

  useEffect(() => {
    WebApp.ready();
    setUser(WebApp.initDataUnsafe?.user);
  }, []);

  if (!user) return <p>Загрузка...</p>;

  return (
    <div style={{ padding: 16 }}>
      <h1>Привет, {user.first_name}!</h1>
      {step <= 3 && <ProgressBar step={step} total={3} />}

      <div className="step-container">
        {step === 1 && (
          <div className="fade">
            <CitySelect
              onNext={(c) => {
                setCity(c);
                setStep(2);
              }}
            />
          </div>
        )}

        {step === 2 && (
          <div className="fade">
            <DateSelect
              onNext={(d) => {
                setDates(d);
                setStep(3);
              }}
              onBack={() => setStep(1)}
            />
          </div>
        )}

        {step === 3 && (
          <div className="fade">
            <InterestsSelect
              onNext={(ints) => {
                setInterests(ints);
                setStep(4);
              }}
              onBack={() => setStep(2)}
            />
          </div>
        )}

        {step === 4 && (
          <div className="fade">
            <RoutePage city={city} dates={dates} interests={interests} />
          </div>
        )}
      </div>
    </div>
  );
}
