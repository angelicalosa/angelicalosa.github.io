import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const pstOffsetHours = 8; // PST is UTC+8
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTimeUTC = new Date('1998-03-25T00:00:00');
    const birthTimePST = new Date(birthTimeUTC.getTime() + (pstOffsetHours * 60 * 60 * 1000));
    setAge(((Date.now() - birthTimePST) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'countries',
    label: 'Countries visited',
    value: 1,
    link:
      'https://www.google.com/maps/d/u/2/embed?mid=1brlWeC-k0bH-oXjLVdCN8sPva26uTcs&ehbc=2E312F',
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'City of Antipolo, Rizal',
  },
];

export default data;
