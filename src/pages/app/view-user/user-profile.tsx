import React from 'react';

const UserProfile = ({ user }: { user: any }) => {
  function parseSalaryRange(range: string) {
    try {
      const parsed = JSON.parse(range);
      return `${parsed.min.toLocaleString()} - ${parsed.max.toLocaleString()} NGN`;
    } catch (e) {
      return 'Not specified';
    }
  }
  const formatSalaryRange = (range: string) => {
    try {
      const { min, max } = JSON.parse(range.replace(/\\/g, ''));
      return `${new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(
        min,
      )} - ${new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(max)}`;
    } catch {
      return 'Salary range not specified';
    }
  };
  return (
    <div className=' mx-auto flex max-w-[1000px] flex-col gap-12 rounded-lg bg-white p-8 py-8 shadow-lg'>
      <div className='flex flex-col items-center justify-center lg:flex-row lg:items-start lg:space-x-6'>
        <div className='flex-1'>
          <h1 className='text-3xl font-bold text-gray-900'>{user?.name}</h1>
          <p className='text-gray-500'>
            {user?.email} | {user?.phone}
          </p>
          <p className='text-sm text-gray-500'>{user?.location}</p>
          <div className='mt-6'>
            <h2 className='text-xl font-semibold text-gray-800'>About Me</h2>
            <p>{user?.summary}</p>
          </div>
        </div>
        <img
          className='my-12 w-[15rem] rounded-md border md:my-0 md:mt-4 md:w-[30rem] lg:mb-0'
          src={user?.profile_picture}
          alt='Profile'
        />
      </div>
      <div className='rounded-lg bg-white'>
        <div className='mt-6 space-y-3'>
          <h2 className='text-2xl font-semibold text-gray-800'>Personal Information</h2>
          <p>
            <strong>Date of Birth:</strong> {new Date(user?.date_of_birth).toLocaleDateString()}
          </p>
          <p>
            <strong>Gender:</strong> {user?.gender}
          </p>
          <p>
            <strong>Highest Qualification:</strong> {user?.highest_qualification}
          </p>
          <p>
            <strong>State Preferred:</strong> {user?.state_preferred}
          </p>
          <p>
            <strong>Preferred Location:</strong> {user?.job_preference}
          </p>
          <p>
            <strong>Salary Range:</strong> {parseSalaryRange(user?.range)}
          </p>
          <p>
            <strong>Negotiate Salary:</strong> {user?.negotiate_salary ? 'Yes ' : 'No'}
          </p>
        </div>

        <div className='mt-6 space-y-3'>
          <h2 className='text-2xl font-semibold text-gray-800'>Identity Verification</h2>
          <p>
            <strong>ID Type:</strong> {user?.identity_name}
          </p>
          {/* <img
            src={user?.identity_url}
            alt='ID Document'
            className='w-full max-w-xs rounded border'
          /> */}
        </div>

        <div className='mt-6 space-y-3'>
          <h2 className='text-2xl font-semibold text-gray-800'>Salary Expectations</h2>
          <p>
            <strong>Range:</strong> {parseSalaryRange(user?.range)}
          </p>
        </div>
      </div>
      <div className='mt-2 grid gap-8 md:grid-cols-2 '>
        <video controls className='md:w-[30rem]'>
          <source src={user?.profile_video} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
        <div>
          <img
            className='h-full w-full rounded border object-contain'
            src={user?.identity_url}
            alt='Identity Document'
          />
        </div>
      </div>
      <div className='mt-6 space-y-3'>
        <h2 className='text-2xl font-semibold text-gray-800'>Professional Details</h2>
        <p>
          <strong>Role:</strong> {user?.job_role}
        </p>
        <p>
          <strong>Experience Level:</strong> {user?.experience_level}
        </p>
        <p>
          <strong>Years of Experience:</strong> {user?.years_of_experience}
        </p>
        <p>
          <strong>Job Preference:</strong> {user?.job_preference}
        </p>
        <p>
          <strong>Negotiate Salary:</strong> {user?.negotiate_salary ? 'Yes' : 'No'}
        </p>
        <p>
          <strong>State Preferred:</strong> {user?.state_preferred || 'Not specified'}
        </p>
        <p>
          <strong>Recruiter Status:</strong> {user?.recruiter_status}
        </p>
      </div>

      <div className='mt-6 space-y-3'>
        <h2 className='text-2xl font-semibold text-gray-800'>Skills & Interests</h2>
        <ul className='list-inside list-disc'>
          {user?.skills?.map((skill: any, key: number) => (
            <li key={key} className='text-gray-600'>
              {skill}
            </li>
          ))}
        </ul>
        <p>
          <strong>Interests:</strong>{' '}
          {user?.interests?.length > 0 ? user.interests.join(', ') : 'No specific interests'}
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
