import React, { useEffect, useState } from 'react';

export const TIME_BETWEEN_CONTENT = 1500;

export const LazyContent = ({ children, fallback = null, ms = 0 }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const showResult = () => {
      setVisible(true);
    };

    const timer = setTimeout(
      showResult,
      ms,
    );

    return () => clearTimeout(timer);
  }, []);

  return <>{visible ? children : fallback}</>;
};

export default { LazyContent };
