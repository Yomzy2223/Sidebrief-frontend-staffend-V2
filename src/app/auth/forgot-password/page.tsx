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
import messageIcon from "@/assets/images/message.png";

const ForgotPassword = () => {
  const { signUp } = useAuth();

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
    <div className="flex flex-col justify-between h-full w-5/6 m-auto">
      <div className="space-y-16">
        <Image src={logo} alt="sidebrief" />
        <div>
          <Image src={messageIcon} alt="" className="mb-10 w-24 h-auto" />
          <p className="mb-3 text-3xl font-medium">Verify your email address</p>
          <p className="mb-14 text-foreground-grey font-normal ">
            A verification link has been sent to your email address **********@
            sidebrief.com to verify your email address.
          </p>
          <Button size="full">Create account</Button>
          <p className="mt-9 text-foreground-grey ">
            Did not see link? <span className="text-secondary">Resend</span>
          </p>
        </div>
      </div>
      <div>
        <p className="mt-9 text-foreground-grey ">
          Need support? <span className="text-secondary">Contact us</span>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
