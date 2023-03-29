import SidebarList from './SidebarList';

export default function Sidebar() {
  return (
    <div className='absolute top-0 left-3 h-screen flex items-center justify-center py-5 '>
      <div className='w-full h-full rounded-md ring-1 ring-slate-50/20 shadow-sm px-6 py-5 dark:bg-slate-800 divide-x divide-slate-50/20'>
        <SidebarList />
      </div>
    </div>
  );
}
