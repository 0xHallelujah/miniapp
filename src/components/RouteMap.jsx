import React, { useEffect, useRef } from "react";

export default function RouteMap({ items }) {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!window.ymaps) return;

    window.ymaps.ready(() => {
      if (!mapRef.current) return;

      const map = new window.ymaps.Map(mapRef.current, {
        center: [items[0].lat, items[0].lng],
        zoom: 12,
        controls: ["zoomControl"],
      });

      const coords = items.map((i) => [i.lat, i.lng]);

      items.forEach((item, idx) => {
        map.geoObjects.add(
          new window.ymaps.Placemark(
            [item.lat, item.lng],
            {
              balloonContent: `<b>${item.place}</b><br/>${item.time} – ${item.duration}<br/>${item.address}`,
              iconContent: idx + 1,
            },
            { preset: "islands#blueCircleIcon" }
          )
        );
      });

      if (coords.length > 1) {
        map.geoObjects.add(
          new window.ymaps.Polyline(coords, {}, { strokeWidth: 3, strokeColor: "#1E90FF" })
        );
      }
    });
  }, [items]);

  return <div ref={mapRef} style={{ width: "100%", height: "300px", margin: "10px 0" }} />;
}
