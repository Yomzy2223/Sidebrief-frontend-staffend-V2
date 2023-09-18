"use client";

import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInOptions, signInSchema, signUpType } from "./constants";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import logo from "@/assets/images/sidebrief-logo.png";
import InputWithLabel from "@/components/inputs/inputWithLabel";
import { useRouter } from "next/router";

const Login = () => {
  const { signIn, signInMutation, forgotPassword } = useAuth();
  const { isLoading } = signInMutation;

  // Form definition
  const form = useForm<signUpType>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Submit handler
  function onSubmit(values: signUpType) {
    signIn(values);
  }

  const handleForgot = () => {
    let userInfo;
    let parsedUserInfo;

    if (typeof window !== "undefined") {
      userInfo = localStorage.getItem("userInfo");
      if (userInfo) {
        parsedUserInfo = JSON.parse(userInfo);
      }
    }

    if (parsedUserInfo) {
      forgotPassword({ email: parsedUserInfo.data?.email });
    }
  };

  return (
    <div className="space-y-9">
      <Image src={logo} alt="sidebrief" />
      <Form {...form}>
        <div>
          <h1 className="mb-4 text-3xl font-medium">Welcome back! Sign in</h1>
          <p className="text-muted-foreground">
            Your business was well-taken care of when you left
          </p>
        </div>
        <div className="flex gap-6">
          {signInOptions.map((el, i) => (
            <Button
              key={i}
              variant="ghost"
              className="flex gap-3 px-4 py-3 border rounded-lg border-input "
            >
              <Image src={el.icon} alt="" />
              <p>{el.text}</p>
            </Button>
          ))}
        </div>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-16 ">
          <div className="flex flex-col gap-6 py-2 space-y-8 bg-white rounded-lg ">
            <InputWithLabel
              form={form}
              name="email"
              label="Work email"
              placeholder="example@sidebrief.com"
              type="email"
            />
            <InputWithLabel
              form={form}
              name="password"
              label="Password"
              placeholder="Enter password"
              tipText="Must be at least 6 characters"
              type="password"
              bottom={
                <Button
                  variant="ghost2"
                  type="button"
                  className="flex self-end text-sm"
                  onClick={handleForgot}
                >
                  Forgot password?
                </Button>
              }
            />
          </div>

          <div className="flex flex-col gap-8">
            <Button type="submit" size="full" loading={isLoading}>
              Sign in
            </Button>
            <p>
              Don&apos;t have have an account?{" "}
              <Link href="/auth/signup" className="text-secondary">
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Login;
