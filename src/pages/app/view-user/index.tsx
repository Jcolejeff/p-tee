import { TabsContent } from 'components/shadcn/ui/tabs';
import { Button } from 'components/shadcn/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormDescription,
  FormLabel,
} from 'components/shadcn/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from 'components/shadcn/ui/select';
import { Input } from 'components/shadcn/input';
import axiosInstance from 'services';
import { ChevronLeft, ChevronRightIcon, CalendarIcon } from 'lucide-react';
import React, { useState } from 'react';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import { cn } from 'lib/utils';
import { Checkbox } from 'components/shadcn/ui/checkbox';
import 'react-phone-input-2/lib/style.css';
import InlineLoader from 'components/Loaders/InlineLoader';
import useUserLocation from 'hooks/useUserLoction';
import { useEffect } from 'react';
import Icon from 'utils/Icon';
import { useNavigate } from 'react-router-dom';
import SavePatientModal from 'components/modal/Patients/SavePatient';
import LinkPatientsModal from 'components/modal/Patients/LinkPatient';
import PI, { PhoneInputProps } from 'react-phone-input-2';
import API from 'services';
import toast, { generateCouponCode } from 'helper';
import Spinner from 'components/shadcn/ui/spinner';
import { processError } from 'helper/error';
import CONSTANTS from 'constant';
import { Switch } from 'components/shadcn/switch';
import { Popover, PopoverContent, PopoverTrigger } from 'components/shadcn/popover';
import { Calendar } from 'components/shadcn/ui/calendar';
import { format, set } from 'date-fns';
import { collection, addDoc } from 'firebase/firestore';
import { db } from 'firebase';
import useStore from 'store';
import UserProfile from './user-profile';
const CreateCoupon = () => {
  const { location } = useUserLocation();
  const navigate = useNavigate();
  const { editUser, setEditUser } = useStore((state) => state);
  const [formIsLoading, setFormIsLoading] = useState(false);

  async function onSubmit() {
    setFormIsLoading(true);

    try {
      const resp = API.patch(`/admin/user/${editUser?.user_id}`, {
        status: 'APPROVED',
      });
      toast.success('User approved successfully!');
    } catch (error: any) {
      processError(error);
    }
    setFormIsLoading(false);
  }

  return (
    <div className='container flex h-full w-full max-w-[180.75rem] flex-col  overflow-auto px-container-base pb-[2.1rem] md:px-container-md'>
      <div className='mb-8 flex  w-full items-center justify-between gap-4 md:flex-row'>
        <div className='flex w-max cursor-pointer items-center gap-3 rounded-[8px] px-[2px]'>
          <button
            onClick={() => {
              setEditUser({});
              navigate(-1);
            }}
          >
            <ChevronLeft className='h-6 w-6 font-light' />
          </button>

          <InlineLoader isLoading={false}>
            <div className='flex flex-col  gap-1'>
              <h3 className=' text-base font-semibold md:text-xl'>{editUser?.name}</h3>
              <p className='text-[0.75rem] '>{editUser?.email}</p>
            </div>
          </InlineLoader>
        </div>

        <div className='flex  gap-4'>
          <button
            onClick={() => {
              setEditUser({});
              navigate(-1);
            }}
            className='group flex items-center justify-center gap-2 rounded-[5px] border   px-8   py-2 text-base font-semibold transition-all duration-300 ease-in-out hover:opacity-90'
          >
            <span className='text-xs font-[500] leading-[24px] tracking-[0.4px]  md:text-sm'>
              Cancel
            </span>
          </button>
        </div>
      </div>
      <section>
        {/* user info section */}
        <UserProfile user={editUser} />
      </section>
      <button
        onClick={onSubmit}
        className={cn(
          `group mt-6 flex  items-center justify-center gap-2 rounded-lg bg-primary-1 px-4 py-3 transition-all duration-300 ease-in-out hover:opacity-90 xm:px-6 xm:py-3 ${
            formIsLoading ? 'cursor-not-allowed bg-gray-500 font-[700]' : 'cursor-pointer'
          } `,
        )}
        disabled={formIsLoading}
      >
        {formIsLoading ? (
          <div className='px-5 py-1'>
            <div className='h-4 w-4 animate-spin  rounded-full border-t-4 border-white'></div>
          </div>
        ) : (
          <span className='text-sm font-[400] leading-[24px]  tracking-[0.4px] text-white '>
            Approve User
          </span>
        )}
      </button>

      <p className='invisible'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quam nulla illo dolore?
        Voluptatibus in blanditiis deleniti quasi a ex culpa quae, aliquid, dolores unde, corrupti
        iusto. Asperiores ipsa dignissimos temporibus error possimus. Asperiores, eos!
      </p>
    </div>
  );
};

export default CreateCoupon;
