import { LazyLoadImage } from 'react-lazy-load-image-component';
import playingBoy from 'assets/image/playing-boy.png?format=webp&imagetools';
import Icon from 'utils/Icon';
import { useNavigate } from 'react-router-dom';
import CONSTANTS from 'constant';
import Logo from 'assets/image/logo.png';

const VerifyEmail = () => {
  const navigate = useNavigate();

  //   TODO: contents of this page will be dymanic based on key search param
  // case 1: email verification after sign up
  // case 2: email reset password link after forgot-password action

  return (
    <div className='flex h-full w-full items-center'>
      <div className='flex-shrink-1 hidden h-full flex-grow-0 basis-auto   items-center justify-center overflow-hidden bg-primary-15 md:flex xl:min-w-[850px]'>
        <div className='min-h-[669.86px] min-w-[700px] transition-all duration-300 ease-in-out'>
          <LazyLoadImage
            className='h-full w-full bg-current'
            src={playingBoy}
            effect='blur'
            alt=' '
          />
        </div>
      </div>
      <div className='mx-auto w-full bg-white px-4 md:max-w-[calc(96px+494px)] md:px-[3rem]'>
        <div className='mx-auto flex w-full flex-col items-start justify-center'>
          <div
            className='mb-[2.125rem] flex cursor-pointer items-center'
            onClick={() => navigate(`/`)}
          >
            {/* <Icon name='nfmLogo' svgProp={{ width: 40, height: 40 }} /> */}
            <img src={Logo} alt='logo' className='h-full w-[10rem]' />

            <h4 className='whitespace-nowrap text-[22px] font-[700]   leading-[24px] tracking-[0.15px] text-primary-9/[0.87] md:text-[28px]'>
              Nollywood Filmmaker.com
            </h4>
          </div>
          <div className='mb-[1.5rem] flex w-full flex-col'>
            <h5 className='font-inter text-[24px] font-[700] leading-[32px] tracking-[0.18px] text-primary-9/[0.87]'>
              Verify your email ✉️
            </h5>
            <p className='leading-[24px] tracking-[0.15px] text-primary-9/[0.60]'>
              Account activation link sent to your email address: john.doe@email.com Please follow
              the link inside to continue.
            </p>
          </div>
          <div className='mb-[1.25rem] flex w-full flex-col gap-4'>
            <button
              onClick={() => navigate(`/${CONSTANTS.ROUTES['login']}`)}
              className='mb-[1.75rem] w-full rounded-[8px] bg-primary-1 py-2 text-[15px] font-[500] text-white shadow-3 transition-opacity duration-300 ease-in-out hover:opacity-90'
            >
              <span className='leading-[0.46px]'>Skip for now</span>
            </button>
            <button
              onClick={() => navigate(`/${CONSTANTS.ROUTES['login']}`)}
              className='flex cursor-pointer items-center gap-1  place-self-center text-[14px] leading-[21px] tracking-[0.15px]'
            >
              <span className='text-secondary-9'>Didn't get the mail? </span>
              <span className=' text-primary-1  hover:underline'> Resend</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
