import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useSignupMutation } from '@/redux/features/auth/authApi';
import { ReloadIcon } from '@radix-ui/react-icons';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { setUser } from '@/redux/features/auth/authSlice';
import { useAppDispatch } from '@/redux/hook';
import Cookies from 'js-cookie';
import { Button } from '@nextui-org/button';
import { Separator } from '@/components/ui/separator';

const SignupPage = ({ setIsLogin }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [newUser, { data, error, isLoading, isSuccess, isError }] =
    useSignupMutation();
  if (isError) {
    const customId = 'custom-id-yes';

    toast.error((error as any)?.data.message, {
      position: 'bottom-left',
      toastId: customId,
    });
  }
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  if (isSuccess) {
    const successId = 'success';
    console.log(data);
    dispatch(setUser(data?.data?.user));
    Cookies.set('accessToken', data?.data.accessToken, { expires: 7 });
    navigate('/');
    toast.success(data.message, {
      position: 'bottom-left',
      toastId: successId,
    });
  }

  const onSubmit = async (userData) => {
    // try {
    await newUser(userData);

    console.log(error);

    console.log(data);
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="max-w-sm w-full  rounded-lg  shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-center text-neutral-400">
          Sign up
        </h2>
        <Separator className="my-4" />

        <form onSubmit={handleSubmit(onSubmit)} className="text-center">
          <div className="mb-4">
            <Controller
              name="userName"
              control={control}
              defaultValue=""
              rules={{ required: 'Username is required' }}
              render={({ field }) => (
                <div>
                  <input
                    {...field}
                    type="text"
                    placeholder="Username"
                    className="w-full px-3 bg-[#27272A] py-2 rounded-md  focus:outline-none focus:border-blue-500"
                  />
                  {errors.username && (
                    <p className="text-left text-red-500 text-sm mt-2">
                      {errors.username.message}
                    </p>
                  )}
                </div>
              )}
            />
          </div>
          <div className="mb-4">
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{ required: 'Email is required' }}
              render={({ field }) => (
                <div>
                  <input
                    {...field}
                    type="email"
                    placeholder="Email"
                    className="w-full px-3 py-2 bg-[#27272A] rounded-md  focus:outline-none focus:border-blue-500"
                  />
                  {errors.email && (
                    <p className="text-left text-red-500 text-sm mt-2">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              )}
            />
          </div>

          <div className="mb-4">
            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{ required: 'Password is required' }}
              render={({ field }) => (
                <div>
                  <input
                    {...field}
                    type="password"
                    placeholder="Password"
                    className="w-full bg-[#27272A] px-3 py-2 rounded-md  focus:outline-none focus:border-blue-500"
                  />
                  {errors.password && (
                    <p className="text-left text-red-500 text-sm mt-2">
                      {errors.password.message}
                    </p>
                  )}
                </div>
              )}
            />
          </div>
          {/* <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Sign Up
          </button> */}
          <Button
            disabled={isLoading}
            className="w-full bg-blue-500 rounded-lg py-1 hover:bg-blue-600 text-white"
            type="submit"
          >
            {isLoading ? (
              <>
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                Signing Up
              </>
            ) : (
              <>Sign Up</>
            )}
          </Button>
        </form>
        <p className="mt-6 text-neutral-400 text-xs text-center">
          Already have an account?{' '}
          <span
            onClick={() => setIsLogin(true)}
            className="text-blue-500 hover:text-blue-600"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
