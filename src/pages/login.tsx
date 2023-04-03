import { NextPage } from "next";
import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { signIn } from "next-auth/react";

import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import LoginLayout from "@/layout/login-layout";
import ViewPassword from "@/components/view-password/view-password";
import ErrorMessage from "@/components/error-message/error-message";
import { useRouter } from "next/router";

const LoginFormSchema = z.object({
  username: z
    .string()
    .min(5, "Username must be atleast 5 characters")
    .max(20, "Username must be atmost 20 characters"),
  password: z
    .string()
    .min(8, "Password must be atleast 8 characters")
    .max(30, "Password must be atmost 30 characters"),
});

export type LoginFormType = z.infer<typeof LoginFormSchema>;

const Login: NextPage = () => {
  const router = useRouter();
  const [viewPassword, setViewPassword] = useState(false);

  const methods = useForm<LoginFormType>({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: zodResolver(LoginFormSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (data: LoginFormType) => {
    console.log("submitted form", JSON.stringify(data));
    const result = await signIn("credentials", {
      redirect: false,
      username: data?.username,
      password: data?.password,
    });
    
    if (result && result.ok) {
      alert("Successfully login");
      router.push("/");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <LoginLayout>
      <div className="py-4 w-full text-center px-[15%]">
        <h1 className="font-bold text-4xl my-4">Welcome back!</h1>
        <p className="text-sm my-3 font-medium">
          Enter your username and password to continue...
        </p>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="my-8">
              <div className="my-5">
                <Input label="Username" type="text" {...register("username")} />
                {errors.username && (
                  <ErrorMessage message={errors.username.message} />
                )}
              </div>
              <div className="my-5">
                <ViewPassword
                  isViewPassword={viewPassword}
                  inputLabel="Password"
                  handleViewPassword={() => setViewPassword(!viewPassword)}
                  error_message={errors.password?.message}
                  error_label={errors.password}
                  register={register("password")}
                />
                <div className="text-right w-full">
                  <Link href="/" className="text-xs">
                    Forgot password?
                  </Link>
                </div>
              </div>
            </div>

            <Button variant="contained" type="submit">
              Login
            </Button>
          </form>
        </FormProvider>

        <div className="w-full mt-8 text-xs">
          <p className="text-gray-70">
            Do not have account yet?
            <Link href="">
              <span className="mx-1 text-brand hover:text-dark-brand">
                Sign up
              </span>
            </Link>
          </p>
        </div>
      </div>
    </LoginLayout>
  );
};

export default Login;
