import FunkyPagesHero from 'components/general/FunkyPagesHero';
import PillTabs from 'components/general/PillTabs';
import SearchComboBox from 'components/general/SearchComboBox';
import { useState } from 'react';
import demoAd from 'assets/image/dashboardAdSample.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Icon from 'utils/Icon';
import BlogCard from 'components/general/ProductCard';
import blogImg from 'assets/image/blogImg.png?format=webp&w=330&h=280&imagetools';
import dpIcon from 'assets/image/demoDp.jpg?format=webp&imagetools';
import BtsCard from 'components/general/BtsCard';
import filmImg from 'assets/image/heyyou.png?format=webp&w=240&h=153&imagetools';
import AssetCard from 'components/general/AssetCard';
import assetImg from 'assets/image/assetFilmImg.png';
import { shimmer, toBase64 } from 'utils/general/shimmer';
import { useQuery } from '@tanstack/react-query';
import { apiInterface, contentApiItemInterface, productInterface } from 'types';
import contentService from 'services/content';
import { processError } from 'helper/error';
import CONSTANTS from 'constant';
import ContentLoader from 'components/general/ContentLoader';
import EmptyContentWrapper from 'components/Hocs/EmptyContentWrapper';
import productService from 'services/product';
import { filterStringsContainingImageExtensions } from 'helper';
import { useNavigate } from 'react-router-dom';
import { cn } from 'lib/utils';
import PieChartComponent from 'components/general/Charts/PieChart';
import LineChartComponent from 'components/general/Charts/LineChart';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from 'components/shadcn/dropdown-menu';
import { Button } from 'components/shadcn/ui/button';
import { ChevronDown, Filter } from 'lucide-react';
import useStore from 'store';
type filterTypes = 'All' | 'Adverts' | 'Blog Posts' | 'BTS' | 'Assets' | 'Upcoming Events';

const generalFilters: filterTypes[] = [
  'All',
  'Adverts',
  'Blog Posts',
  'BTS',
  'Assets',
  'Upcoming Events',
];

const Dashboard = () => {
  const [currFilter, setCurrFilter] = useState<filterTypes>('All');
  const [position, setPosition] = useState('bottom');
  //TODO: handle key searchparam of type filterTypes
  const { authDetails } = useStore((state) => state);
  const navigate = useNavigate();

  const { isLoading, data: stats } = useQuery({
    queryKey: [`get-stats`],
    queryFn: () => contentService.getDashboardStats(),

    onError: (err) => {
      processError(err);
    },
  });
  const data = [
    {
      subHeading: 'Registered Users',
      count: stats?.registered_users,
      icons: (
        <Icon
          svgProp={{
            width: 18,
            height: 18,
            className: 'text-current',
          }}
          name='RegUsers'
        />
      ),
    },
    {
      subHeading: 'Male Users',
      count: stats?.male_users,
      icons: (
        <Icon
          svgProp={{
            width: 18,
            height: 18,
            className: 'text-current',
          }}
          name='RegUsers'
        />
      ),
    },
    {
      subHeading: 'Female Users',
      count: stats?.female_users,
      icons: (
        <Icon
          svgProp={{
            width: 18,
            height: 18,
            className: 'text-current',
          }}
          name='RegUsers'
        />
      ),
    },
    {
      subHeading: 'Downloads',
      count: stats?.downloads,
      icons: (
        <Icon
          svgProp={{
            width: 18,
            height: 18,
            className: 'text-current',
          }}
          name='Orders'
        />
      ),
    },
    {
      subHeading: 'Time Spent on Screens',
      count: `${stats?.timespentonscreens / 60} Mins`,
      icons: (
        <Icon
          svgProp={{
            width: 18,
            height: 18,
            className: 'text-current',
          }}
          name='FlashSale'
        />
      ),
    },
    {
      subHeading: 'Jobs',
      count: stats?.jobs,
      icons: (
        <Icon
          svgProp={{
            width: 18,
            height: 18,
            className: 'text-current',
          }}
          name='Products'
        />
      ),
    },
    {
      subHeading: 'Trainers',
      count: stats?.business_users,
      icons: (
        <Icon
          svgProp={{
            width: 18,
            height: 18,
            className: 'text-current',
          }}
          name='Categories'
        />
      ),
    },
    {
      subHeading: 'Clients',
      count: stats?.candidate_users,
      icons: (
        <Icon
          svgProp={{
            width: 18,
            height: 18,
            className: 'text-current',
          }}
          name='SubCat'
        />
      ),
    },
  ];

  return (
    <div className='container flex h-full w-full flex-col overflow-auto px-container-base py-[1rem] pb-10 md:px-container-md'>
      <section className=' grid gap-[4rem]  rounded-lg md:grid-cols-[2fr_1fr] '>
        <div>
          <h3 className=' mb-16 text-base font-semibold md:text-2xl'>
            Welcome {authDetails?.profile?.full_name}
          </h3>
          <div
            className={cn(
              `}   grid cursor-pointer grid-cols-[1fr] gap-[2rem] rounded-lg rounded-lg  transition-all  duration-500 ease-in-out md:grid-cols-[1fr_1fr]  xxl:grid-cols-[1fr_1fr]`,
            )}
          >
            {data.map((item, key) => {
              return (
                <div
                  className=' flex items-center  gap-4 rounded-lg  px-4  py-3 shadow-md'
                  key={key}
                >
                  <div className='flex items-center justify-center rounded-lg bg-primary-3 px-4 py-4 '>
                    {item.icons}
                  </div>
                  <div className='  flex-col gap-1'>
                    <p className='font-bold md:text-[0.9rem]'>{item.count}</p>
                    <h3 className='text-[0.65rem]'>{item.subHeading}</h3>
                  </div>
                </div>
              );
            })}
          </div>
          {/* <div className='mt-12'>
            <p className='mb-10 text-lg font-medium text-primary-1'>Statistical Chart</p>
            <LineChartComponent />
          </div> */}
        </div>
        <div className='flex flex-col gap-4'>
          <p className=' text-lg font-medium text-primary-1'>Activity</p>
          {/* <p className=' text-xs'>Today</p> */}
          <PieChartComponent male={stats?.male_users ?? 0} female={stats?.female_users ?? 0} />
          <div className='mt-6 space-y-4'>
            <div className=' flex  items-center gap-2 '>
              <div className='h-5 w-5 rounded-sm bg-[#00BABA]'></div>
              <p className='text-[0.65rem]'>Female Users</p>
            </div>
            <div className=' flex items-center gap-2 '>
              <div className='h-5 w-5 rounded-sm bg-[#EADB55]'></div>
              <p className='text-[0.65rem]'>Male Users</p>
            </div>
          </div>
          <div className='mt-8 flex flex-col gap-3 border-t-2 border-t-gray-100 pt-6'>
            <p className=' text-lg font-medium text-primary-1'>Recent Activity</p>
            {/* <section className='flex justify-between'>
              <div>
                <p className=' text-xs font-medium'>Registered users</p>

                <div className='mt-6 space-y-4'>
                  <div className=' flex  items-center gap-2 '>
                    <p className='text-[0.65rem]'>5:08 AM</p>
                    <p className='text-[0.65rem]'>Yemi lawal new user</p>
                  </div>
                  <div className=' flex  items-center gap-2 '>
                    <p className='text-[0.65rem]'>5:08 AM</p>
                    <p className='text-[0.65rem]'>Yemi lawal new user</p>
                  </div>
                </div>
              </div>
              <div>
                <p className='text-end text-xs font-medium'>Recent jobs</p>

                <div className='mt-6 space-y-4'>
                  <div className=' flex  items-center gap-2 '>
                    <p className='text-[0.65rem]'>5:08 AM</p>
                    <p className='text-[0.65rem]'>Products ordered</p>
                  </div>
                  <div className=' flex  items-center gap-2 '>
                    <p className='text-[0.65rem]'>5:08 AM</p>
                    <p className='text-[0.65rem]'>Products ordered</p>
                  </div>
                </div>
              </div>
            </section> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
