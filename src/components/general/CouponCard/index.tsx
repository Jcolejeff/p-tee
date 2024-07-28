import CONSTANTS from 'constant';
import { Star, StarHalf, Clipboard, Copy } from 'lucide-react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate } from 'react-router-dom';
import { shimmer, toBase64 } from 'utils/general/shimmer';
import { copyToClipboard } from 'helper';
import useStore, { StoreType } from 'store';

interface ICouponCard {
  purpose: string;
  date: string | number;
  name: string;
  link?: string;
  discount: string | number;
  item?: any;
}

const UserCard = ({
  purpose,
  discount,
  date,
  name,
  item,
  link = `/${CONSTANTS.ROUTES.blogs}/test-blog`,
}: ICouponCard) => {
  const navigate = useNavigate();
  const { setEditUser } = useStore((state: StoreType) => state);
  return (
    <div className='group  flex h-max w-full cursor-pointer flex-col items-center justify-between gap-4 rounded-2xl bg-primary-10 px-4 py-4  shadow-md transition-all duration-300 ease-in-out'>
      <div>
        <div
          className='relative  h-[8rem] w-full  cursor-cardCursor  overflow-hidden rounded-2xl
        transition-all duration-300 ease-in-out after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-transparent after:transition-all after:duration-300 hover:after:bg-black/40
        '
        >
          <LazyLoadImage
            placeholderSrc={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
            src={item?.profile_picture}
            alt=' '
            className='h-full  w-full bg-cover bg-top object-cover transition-transform duration-300 ease-in-out group-hover:scale-105'
          />
        </div>
      </div>
      <div>
        <p className='text-center text-[0.9rem] capitalize leading-[27px]'>{item?.job_role}</p>
        <p className='text-center text-[0.85rem] font-[300] leading-[27px] '>{`${item?.role}`}</p>
      </div>
      <div>
        <h5 className=' gap-2 text-center text-[1.1rem] font-[600] capitalize leading-[27px] text-primary-1 '>
          {name}
        </h5>
        <p className='text-center text-[0.7rem] font-medium  leading-[21px] tracking-[0.1px]  '>
          Registered: {date}
        </p>
      </div>

      <button
        onClick={() => {
          setEditUser(item);

          navigate(`/app/${CONSTANTS.ROUTES['view-user']}?edit=true&userId=${item?.user_id}`);
        }}
        className='group flex w-full items-center justify-center gap-2 rounded-[8px] border border-primary-1   px-8   py-2 text-base font-semibold transition-all duration-300 ease-in-out hover:opacity-90'
      >
        <span className='text-sm font-[500] leading-[24px] tracking-[0.4px] text-primary-1  '>
          View User
        </span>
      </button>
    </div>
  );
};

export default UserCard;
