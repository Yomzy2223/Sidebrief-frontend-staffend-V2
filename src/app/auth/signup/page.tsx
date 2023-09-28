"use client";

import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpOptions, signUpSchema, signUpType } from "./constants";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import logo from "@/assets/images/sidebrief-logo.png";
import InputWithLabel from "@/components/inputs/inputWithLabel";

const SignUp = () => {
  const { signUp, signUpMutation } = useAuth();
  const { isLoading } = signUpMutation;

  // Form definition
  const form = useForm<signUpType>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  // Submit handler
  function onSubmit(values: signUpType) {
    signUp(values);
  }

  return (
    <div className="space-y-9">
      <Image src={logo} alt="sidebrief" />
      <Form {...form}>
        <div>
          <h1 className="mb-4 text-3xl font-medium">Create account</h1>
          <p className="text-muted-foreground hidden xs:block">Join our 500+ customers to scale your business</p>
        </div>
        {/* <div className="flex  gap-6">
          {signUpOptions.map((el, i) => (
            <Button
              key={i}
              variant="ghost"
              className="flex gap-3 border border-input rounded-lg px-4 py-3 "
            >
              <Image src={el.icon} alt="" />
              <p>{el.text}</p>
            </Button>
          ))}
        </div>
         */}
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-16  ">
          <div className="flex flex-col gap-6 space-y-8 py-2 bg-white rounded-lg ">
            <div className="flex flex-col gap-4 sm:flex-row">
              <InputWithLabel
                form={form}
                name="firstName"
                label="First name"
                placeholder="Enter your first name"
              />
              <InputWithLabel
                form={form}
                name="lastName"
                label="Last name"
                placeholder="Enter your last name"
              />
            </div>
            <InputWithLabel
              form={form}
              name="phone"
              label="Phone number"
              placeholder="+23456789123456"
              type="number"
            />
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
            />
          </div>

          <div className="flex flex-col gap-8 text-center">
            <Button type="submit" size="full" loading={isLoading}>
              Create account
            </Button>
            <p>
              Already have an account?{" "}
              <Link href="/auth/login" className="text-secondary">
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SignUp;
