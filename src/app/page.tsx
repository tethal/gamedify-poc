'use client';
import React from 'react';
import QSet from './qset/page';


export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center h-full w-full'>
      <h1 className='text-5xl'>AZk game</h1>
      <QSet />
    </div>
  );
}
