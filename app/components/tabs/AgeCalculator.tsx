import { useEffect, useState } from 'react';

const AgeCalculator = () => {
  const [age, setAge] = useState<string>('Calculating...');

  useEffect(() => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('2004-12-07T00:00:00');

    const updateAge = () => {
      const age = ((Date.now() - birthTime.getTime()) / divisor).toFixed(11);
      setAge(age);
    };

    const intervalId = setInterval(updateAge, 25); // Update age every 25 ms
    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="relative overflow-x-auto sm:rounded-lg" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <td className="text-darkMint mt-4">
            <p>{age}</p>
        </td>
    </div>
  );
};

export default AgeCalculator;