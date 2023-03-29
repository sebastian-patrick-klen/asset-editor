import React from 'react';
import { BsReverseLayoutSidebarInsetReverse, BsBrush } from 'react-icons/bs';
import SidebarButton from './SidebarButton';

export default function SidebarList() {
  return (
    <ul className='flex gap-2'>
      <li>
        <SidebarButton>
          <BsReverseLayoutSidebarInsetReverse size={20} />
          <p>Panels</p>
        </SidebarButton>
      </li>
      <li>
        <SidebarButton>
          <BsBrush size={20} /> <p>Styles</p>
        </SidebarButton>
      </li>
    </ul>
  );
}
