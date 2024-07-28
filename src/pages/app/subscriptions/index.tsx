import AssetCard from 'components/general/AssetCard';
import FunkyPagesHero from 'components/general/FunkyPagesHero';
import PillTabs from 'components/general/PillTabs';
import SearchComboBox from 'components/general/SearchComboBox';
import { useEffect, useState } from 'react';
import filmImg from 'assets/image/assetFilmImg.png';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from 'components/shadcn/dialog';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { shimmer, toBase64 } from 'utils/general/shimmer';
import { Button } from 'components/shadcn/ui/button';
import productService from 'services/product';
import { processError } from 'helper/error';
import { useQuery } from '@tanstack/react-query';
import { apiInterface, productInterface } from 'types';
import ContentLoader from 'components/general/ContentLoader';
import assetImg from 'assets/image/assetFilmImg.png';
import CONSTANTS from 'constant';
import { filterStringsContainingDoc, filterStringsContainingImageExtensions } from 'helper';
import FileSaver from 'file-saver';
import { useSearchParams } from 'react-router-dom';
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
import { ChevronDown, Filter } from 'lucide-react';
import EditWalletBalance from 'components/modal/EditWalletBalanceModal';

import SubscriptionsTable from 'components/Tables/subscriptionsTable';
import Icon from 'utils/Icon';
type filterTypes =
  | 'All'
  | 'Pre-Production'
  | 'Post-production'
  | 'Distribution and Marketing'
  | 'Starred';

const generalFilters: filterTypes[] = [
  'All',
  'Pre-Production',
  'Distribution and Marketing',
  'Starred',
];

const OrdersPage = () => {
  const [position, setPosition] = useState('bottom');

  return (
    <div className='container flex h-full w-full max-w-[180.75rem] flex-col  overflow-auto px-container-base pb-[2.1rem] md:px-container-md'>
      <div className='mb-16 flex  items-center justify-between md:mb-0'>
        <h3 className=' text-base font-semibold md:mb-16 md:text-2xl'>Track Subscriptions</h3>
        <EditWalletBalance
          trigger={
            <Button
              variant='outline'
              className='flex w-full  items-center justify-start gap-2 border   px-2 text-[0.81rem] capitalize   text-primary-1  disabled:cursor-not-allowed disabled:opacity-50'
              onClick={() => {
                setTimeout(() => {
                  console.log('delete');
                }, 500);
              }}
            >
              <Icon name='editPen' svgProp={{ className: 'text-black hidden md:block' }}></Icon>
              <p>Create Subscription </p>
            </Button>
          }
        ></EditWalletBalance>
      </div>
      <div className='relative grid w-full'>
        <SubscriptionsTable />
      </div>
    </div>
  );
};

export default OrdersPage;
