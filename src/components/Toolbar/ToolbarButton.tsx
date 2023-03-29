import React from 'react';

type Props = {
  children?: React.ReactNode;
};

export default function ToolbarButton({ children }: Props) {
  return (
    <button
      type='button'
      className='w-full lg:flex items-center text-sm leading-6 text-slate-400 rounded-md px-2 py-2 dark:hover:bg-slate-700'
    >
      {children}
    </button>
  );
}
