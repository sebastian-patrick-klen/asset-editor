import Head from 'next/head';

import Canvas from '@/components/Canvas';
import { useEffect, useRef, useState } from 'react';
import Toolbar from '@/components/Toolbar/Toolbar';
import Sidebar from '@/components/Sidebar/Sidebar';

export default function Home() {
  const ref: any = useRef(null);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='relative w-full h-screen bg-slate-900' ref={ref}>
        <Toolbar />
        <Sidebar />
        <Canvas />
      </main>
    </>
  );
}