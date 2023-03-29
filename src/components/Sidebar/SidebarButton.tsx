import React from 'react';

type Props = {
  children?: React.ReactNode;
};

export default function SidebarButton({ children }: Props) {
  return (
    <button
      type='button'
      className='w-full flex gap-2 items-center text-sm leading-6 text-slate-400 rounded-md p-3 dark:hover:bg-slate-700'
    >
      {children}
    </button>
  );
}
