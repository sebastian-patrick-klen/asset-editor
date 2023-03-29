import {
  BsCursor,
  BsEraser,
  BsPen,
  BsXSquare,
  BsPlusSquare,
  BsFolderPlus,
} from 'react-icons/bs';
import ToolbarButton from './ToolbarButton';

export default function Toolbar() {
  return (
    <div className='absolute bottom-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center'>
      <div className='w-full grid grid-cols-2 justify-center rounded-md ring-1 ring-slate-50/20 shadow-sm px-4 py-3 dark:bg-slate-800 divide-x divide-slate-50/20'>
        <div className='flex gap-1 items-center pr-1.5'>
          <ToolbarButton>
            <BsCursor size={20} />{' '}
          </ToolbarButton>{' '}
          <ToolbarButton>
            <BsPen size={20} />{' '}
          </ToolbarButton>
          <ToolbarButton>
            <BsEraser size={20} />{' '}
          </ToolbarButton>{' '}
        </div>{' '}
        <div className='flex gap-1 items-center pl-1.5'>
          <ToolbarButton>
            <BsPlusSquare size={20} />{' '}
          </ToolbarButton>{' '}
          <ToolbarButton>
            <BsXSquare size={20} />{' '}
          </ToolbarButton>{' '}
          <ToolbarButton>
            <BsFolderPlus size={20} />{' '}
          </ToolbarButton>
        </div>
      </div>
    </div>
  );
}
