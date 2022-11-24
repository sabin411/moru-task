import React from 'react';

// packages
import { Spin } from 'antd';

export function Spinner() {
  return (
    <div className='spinner-container'>
      <Spin />
    </div>
  );
}
