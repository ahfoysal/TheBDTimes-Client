import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useLoginMutation } from '@/redux/features/auth/authApi';
import { toast } from 'react-toastify';
import { ReloadIcon } from '@radix-ui/react-icons';

import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/redux/hook';
import { setUser } from '@/redux/features/auth/authSlice';
import Cookies from 'js-cookie';
import { Button } from '@nextui-org/button';
import { Separator } from '@/components/ui/separator';

const LoginPage = ({ setIsLogin }) => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [newUser, { data, error, isLoading, isError, isSuccess }] =
    useLoginMutation();
  if (isError) {
    const errorId = 'error';

    toast.error((error as any)?.data.message, {
      position: 'bottom-left',
      toastId: errorId,
    });
  }
  const dispatch = useAppDispatch();

  if (isSuccess) {
    const successId = 'success';
    console.log(data.data);
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
  };

  return (
    <div className=" flex items-center justify-center ">
      <div className="max-w-sm w-full  rounded-lg  shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-center text-neutral-400">
          Login
        </h2>
        <Separator className="my-4" />

        <form onSubmit={handleSubmit(onSubmit)} className="text-center">
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
                    className="w-full px-3 bg-[#27272A] py-2 rounded-md  focus:outline-none focus:border-blue-500"
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

          <Button
            disabled={isLoading}
            className="w-full bg-blue-500 hover:bg-blue-600 py-1 rounded-lg  text-white"
            type="submit"
          >
            {isLoading ? (
              <>
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                Logging Up
              </>
            ) : (
              <>Login</>
            )}
          </Button>
        </form>
        <p className="mt-6 text-center text-xs text-neutral-400">
          Dont’t Have An Account ?{'   '}
          <span
            onClick={() => setIsLogin(false)}
            className="text-blue-500  hover:text-blue-600"
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
