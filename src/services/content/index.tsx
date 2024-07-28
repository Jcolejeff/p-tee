import API from '../index';
import { getContentInterface, getSingleContentInterface } from './content.types';

const getContent = async (params: getContentInterface) => {
  const { data } = await API.get(`/contents`, {
    params: {
      ...params,
      is_published: true,
    },
  });

  return data;
};

const getSingleContent = async (params: getSingleContentInterface) => {
  const { data } = await API.get(`/contents/${params?.id}`, {
    params: {
      organization_id: params?.organization_id,
    },
  });

  return data;
};
const getAllUsers = async (role: string) => {
  let url = '/admin/users';
  if (role !== 'all') {
    url = `/admin/users?role=${role}&size=8000`;
  }
  const { data } = await API.get(url);
  const refinedData = data?.data.map((item: any) => {
    return {
      ...item,
      name: `${item?.profile_details?.first_name ?? 'N/A'} ${
        item?.profile_details?.last_name ?? 'N/A'
      }`,
      location: item?.profile_details?.location ?? 'N/A',
      gender: item?.profile_details?.gender ?? 'N/A',
      job: item?.profile_details?.job_role ?? 'N/A',
      level: item?.profile_details?.experience_level ?? 'N/A',
    };
  });
  data.data = refinedData;
  return data;
};
const getDashboardStats = async () => {
  const { data } = await API.get(`/admin?size=8000`);

  return data?.data;
};
const getUserActivities = async () => {
  const { data } = await API.get(`/admin/user/activities?size=8000`);
  const refinedData = data?.data.map((item: any) => {
    return {
      ...item,
      name: `${item?.user?.profile_details?.first_name ?? 'N/A'} ${
        item?.user?.profile_details?.last_name ?? 'N/A'
      }`,
      phone: item?.user?.phone ?? 'N/A',
      email: item?.user?.email ?? 'N/A',
      job: item?.profile_details?.job_role ?? 'N/A',
      level: item?.profile_details?.experience_level ?? 'N/A',
    };
  });
  return refinedData;
};
const getPayments = async () => {
  const { data } = await API.get(`/admin/payment/users?size=8000`);
  const refinedData = data?.data.map((item: any) => {
    return {
      ...item,
      name: `${item?.user?.profile_details?.first_name ?? 'N/A'} ${
        item?.user?.profile_details?.last_name ?? 'N/A'
      }`,
      phone: item?.user?.phone ?? 'N/A',
      email: item?.user?.email ?? 'N/A',
      job: item?.profile_details?.job_role ?? 'N/A',
      level: item?.profile_details?.experience_level ?? 'N/A',
    };
  });
  return refinedData;
};
const getSubscriptions = async () => {
  const { data } = await API.get(`/payment/subscription-plans?size=8000`);
  const refinedData = data?.data.map((item: any) => {
    return {
      ...item,
    };
  });
  return refinedData;
};
const getUnapprovedUsers = async () => {
  const { data } = await API.get(`/admin/users/unapproved?size=8000`);
  const refinedData = data?.data.map((item: any) => {
    return {
      ...item,
      name: `${item?.profile_details?.first_name ?? 'N/A'} ${
        item?.profile_details?.last_name ?? 'N/A'
      }`,

      ...item?.profile_details,
    };
  });
  console.log('refinedData', refinedData.length);
  return refinedData;
};
const approveUsers = async (id: string) => {
  const { data } = await API.patch(`/admin/user/${id}`, {
    status: 'APPROVED',
  });

  return data;
};

const contentService = {
  getContent,
  getSingleContent,
  getAllUsers,
  getDashboardStats,
  getUserActivities,
  getPayments,
  getSubscriptions,
  getUnapprovedUsers,
};

export default contentService;
