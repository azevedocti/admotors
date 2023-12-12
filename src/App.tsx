import { FC } from 'react';

import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <h1>AdMotors{name}!</h1>
      <p>Test</p>
    </div>
  );
};
