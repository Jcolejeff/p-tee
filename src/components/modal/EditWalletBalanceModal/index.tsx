import { Dialog, DialogContent, DialogTrigger } from 'components/shadcn/dialog';

import { useState } from 'react';
import Icon from 'utils/Icon';
import { useNavigate } from 'react-router-dom';
import TextInfoSTack from 'components/general/InfoStack/InfoStack';
import { Checkbox } from 'components/shadcn/checkbox';
import CreateSubscriptions from './form';

interface Iprop {
  trigger: JSX.Element;
  triggerClassName?: string;
  title?: string;
}

const EditWalletBalanceModal = ({ trigger, triggerClassName, title }: Iprop) => {
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <Dialog onOpenChange={(i) => setModalOpen(i)} open={modalOpen}>
      <DialogTrigger className={triggerClassName}>{trigger}</DialogTrigger>
      <DialogContent className='no-scrollbar mt-4 flex w-full max-w-full  flex-col justify-center overflow-auto  overflow-x-hidden bg-white  px-6 py-12  md:!max-w-[700px] lg:px-[2rem]'>
        <CreateSubscriptions
          closeModal={() => {
            setModalOpen(false);
          }}
        />
      </DialogContent>
    </Dialog>
  );
};

export default EditWalletBalanceModal;
