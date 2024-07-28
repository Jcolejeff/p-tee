import { LazyLoadImage } from 'react-lazy-load-image-component';
import sittingLady from 'assets/image/sittingLady.png?format=webp&w=350&h=552.18&imagetools';
import { Input } from 'components/shadcn/input';
import Icon from 'utils/Icon';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogContent, DialogTrigger } from 'components/shadcn/dialog';
import CONSTANTS from 'constant';
import Logo from 'assets/image/logo.png';

export type subTypes = 'Nollywood Student' | 'Nollywood Professional' | 'Nollywood Master';

interface planInterface {
  plan: subTypes;
  description: string;
  price: string;
}

export const availableSubs: planInterface[] = [
  { plan: 'Nollywood Student', description: 'For newbies in the industry', price: '5,000' },
  {
    plan: 'Nollywood Professional',
    description: 'For mid-levels in the Industry',
    price: '20,000',
  },
  { plan: 'Nollywood Master', description: 'For Seniors in the Industry', price: '50,000' },
];

const SelectPlan = () => {
  const [selectedPlan, setSelectedPlan] = useState<subTypes>('Nollywood Student');
  const navigate = useNavigate();

  return (
    <div className='flex h-full w-full items-center'>
      <div className='flex-shrink-1 hidden h-full flex-grow-0 basis-auto items-center justify-end overflow-hidden bg-primary-15 md:flex xl:min-w-[450px]'>
        <div className='min-h-[552.18px] min-w-[350px] transition-all duration-300 ease-in-out'>
          <LazyLoadImage
            className='h-full w-full bg-current'
            src={sittingLady}
            effect='blur'
            alt=' '
          />
        </div>
      </div>
      <div className='mx-auto h-full w-full bg-white px-4   py-8 md:flex md:max-w-[calc(700px)] md:items-center'>
        <div className='mx-auto flex w-full flex-col items-start justify-center '>
          <h5 className='text-[24px] font-[500] leading-[32px] text-primary-9/[0.87]'>
            Select Plan
          </h5>
          <p className='mb-[1.25rem] leading-[24px] tracking-[0.15px] text-primary-9/[0.60] '>
            Select plan as per your requirement
          </p>
          <div className='mx-auto mb-[2.5rem] grid grid-cols-1 gap-[1.25rem] md:grid-cols-3'>
            {availableSubs?.map((i, idx) => (
              <div
                key={idx}
                className='flex cursor-pointer flex-col gap-2 rounded-[8px] border border-primary-9/[0.12] p-4
                transition-colors duration-300 ease-in-out hover:border-primary-1
                '
                onClick={() => setSelectedPlan(i?.plan)}
              >
                <h6 className='text-center text-[16.67px] font-[500] leading-[22px] text-primary-9/[0.87]'>
                  {i?.plan}
                </h6>
                <span className='text-center text-[9.72px] leading-[15px] text-primary-9/[0.6]'>
                  {i?.description}
                </span>
                <div className='flex h-max justify-center '>
                  <span
                    className={`${
                      i?.plan === 'Nollywood Master' ? 'text-danger-3' : 'text-primary-1'
                    }  self-start text-[9.72px] leading-[15px] tracking-[0.15px]`}
                  >
                    ₦
                  </span>
                  <span
                    className={` ${
                      i?.plan === 'Nollywood Master' ? 'text-danger-3' : 'text-primary-1'
                    } font-inter text-[23.61px] font-[500] leading-[29px] tracking-[0.17px] `}
                  >
                    {i?.price}
                  </span>
                  <span className='self-end  text-[14px] leading-[21px] tracking-[0.15px] text-primary-9/60'>
                    /month
                  </span>
                </div>
                <div className='my-[1.2rem] flex justify-center'>
                  <div
                    className={`h-[15px] w-[15px] rounded-[50px] ${
                      i?.plan === selectedPlan
                        ? `border-4 border-primary-1 shadow-8`
                        : `border border-primary-9/[0.38]`
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
          <h5 className='text-[24px] font-[500] leading-[32px] text-primary-9/[0.87]'>
            Payment Information
          </h5>
          <p className='mb-[1.25rem] leading-[24px] tracking-[0.15px] text-primary-9/[0.60] '>
            Enter your card information
          </p>
          <div className='flex w-full flex-col gap-[1.25rem]'>
            <Input placeholder='Card Number' className='w-full placeholder:text-primary-9/[0.38]' />
            <div className='grid grid-cols-1 gap-[1.25rem] md:grid-cols-2'>
              <Input
                placeholder='Name on Card'
                className='w-full placeholder:text-primary-9/[0.38]'
              />
              <div className='grid grid-cols-2 gap-[1.25rem]'>
                <Input placeholder='Expiry' className='w-full placeholder:text-primary-9/[0.38]' />
                <Input placeholder='CVV' className='w-full placeholder:text-primary-9/[0.38]' />
              </div>
            </div>
            <div className='flex justify-between'>
              <button
                onClick={() => navigate(`/app/${CONSTANTS.ROUTES['blogs']}`)}
                className='group mb-8 flex h-[38px] w-[130px] items-center justify-center gap-2 rounded-[6px] bg-primary-1 transition-all duration-300 ease-in-out hover:opacity-90'
              >
                <span className='text-[14px] font-[500] leading-[24px] tracking-[0.4px] text-white'>
                  Skip
                </span>
              </button>
              <Dialog>
                <DialogTrigger>
                  <button className='group mb-8 flex h-[38px] w-[130px] items-center justify-center gap-2 rounded-[6px] bg-primary-1 transition-all duration-300 ease-in-out hover:opacity-90'>
                    <span className='text-[14px] font-[500] leading-[24px] tracking-[0.4px] text-white'>
                      PAY NOW
                    </span>
                    <Icon
                      name='arrowTo'
                      svgProp={{
                        className:
                          'text-white group-hover:translate-x-1 transition-transform duration-300 ease-in-out',
                      }}
                    />
                  </button>
                </DialogTrigger>
                <DialogContent className='h-screen !max-w-[1120px] bg-white sm:h-max sm:w-[80vw]'>
                  <div className='flex h-full w-full flex-col items-center gap-[1.5rem] pb-[5.31rem] pt-[6.56rem]'>
                    <div className='mb-[1.25rem] flex w-full justify-center'>
                      <Icon name='bigSmile' />
                    </div>
                    <h5 className='max-w-[469px] text-center font-mukta text-[24px] font-[500] leading-[32px] text-secondary-17'>
                      You have successfully subscribed to “Nollywood Professional”
                    </h5>
                    <p
                      className='max-w-[544px] text-center text-[14px] leading-[21px]
                       tracking-[0.15px] text-primary-9/60'
                    >
                      Enjoy all splendid benefits that come with being a Nollywood professional! You
                      have the first 14 days free and you can cancel at anytime!
                    </p>
                    <button
                      onClick={() => navigate(`/app/${CONSTANTS.ROUTES.dashboard}`)}
                      className='w-full max-w-[560px] rounded-[4px] bg-primary-1 py-4 leading-[20px] tracking-[0.15px] text-white transition-opacity duration-300 ease-in-out hover:opacity-90'
                    >
                      Go to Dashboard
                    </button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectPlan;
