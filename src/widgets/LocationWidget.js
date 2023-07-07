import React, { useEffect, useState } from 'react';

export default function LocationWidget() {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get the user's location using the browser's Geolocation API
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        // Fetch the location details using latitude and longitude
        fetchLocation(latitude, longitude);
      },
      (error) => {
        console.error('Error getting location:', error);
        setLoading(false);
      }
    );
  }, []);

  const fetchLocation = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=b4b89a26b9476a36bfcac52d79f86c96`
      );

      if (response.ok) {
        const data = await response.json();
        const { name, country } = data[0];
        setLocation(`${name}, ${country}`);
      } else {
        console.error('Failed to fetch location:', response.status);
      }
    } catch (error) {
      console.error('Error fetching location:', error);
    }

    setLoading(false);
  };

  return (
    <div className="location-widget">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <p>{location ? `Your location: ${location}` : 'Location not available'}</p>
      )}
    </div>
  );
}
