"use client";

import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newPasswordSchema, newPasswordType } from "./constants";
import { useAuth } from "@/hooks/useAuth";
import logo from "@/assets/images/sidebrief-logo.png";
import InputWithLabel from "@/components/inputs/inputWithLabel";
import { getUserInfo } from "@/lib/globalFunctions";

const SignUp = () => {
  const { changePassword, changePasswordMutation } = useAuth();
  const { isLoading } = changePasswordMutation;

  // Form definition
  const form = useForm<newPasswordType>({
    resolver: zodResolver(newPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  // Submit handler
  function onSubmit(values: newPasswordType) {
    const payload = {
      email: getUserInfo().data?.email,
      password: values.password,
      token: "",
    };
    changePassword(payload);
  }

  return (
    <div className="space-y-9">
      <Image src={logo} alt="sidebrief" />
      <Form {...form}>
        <div>
          <h1 className="mb-4 text-3xl font-medium">Reset Password</h1>
          <p className="text-muted-foreground">
            Kindly use password combination you can easily remember
          </p>
        </div>
        <div></div>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-16  ">
          <div className="flex flex-col gap-6 space-y-8 py-2 bg-white rounded-lg ">
            <InputWithLabel
              form={form}
              name="password"
              label="Create new password"
              placeholder="Must be at least 6 characters"
              tipText="Must be at least 6 characters"
              type="password"
            />
            <InputWithLabel
              form={form}
              name="confirmPassword"
              label="Confirm password"
              placeholder="Confirm new password"
              tipText="Must match the new password"
              type="password"
            />
          </div>

          <div className="flex flex-col items-center gap-8">
            <Button type="submit" size="full" loading={isLoading}>
              Reset password
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SignUp;
