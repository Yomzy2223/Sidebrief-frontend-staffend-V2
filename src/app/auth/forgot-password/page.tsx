"use client";

import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import logo from "@/assets/images/sidebrief-logo.png";
import { getUserInfo } from "@/lib/globalFunctions";

const ForgotPassword = () => {
  const { forgotPassword, forgotPasswordMutation } = useAuth();
  const { isLoading } = forgotPasswordMutation;

  const userInfo = getUserInfo().data;

  // Submit handler
  const goToEmail = () => {
    const mailtoLink = `mailto:${userInfo.email}`;
    window.location.href = mailtoLink;
  };

  const handleResend = () => {
    forgotPassword({ email: userInfo?.email });
  };

  return (
    <div className="flex flex-col justify-between h-full w-5/6 m-auto">
      <div className="space-y-16">
        <Image src={logo} alt="sidebrief" />
        <div>
          <p className="mb-3 text-3xl font-medium">Verify your email address</p>
          <p className="mb-14 text-foreground-grey font-light ">
            A verification link has been sent to your email address **********@ sidebrief.com to
            verify your email address.
          </p>
          <Button size="full" onClick={goToEmail}>
            Go to email
          </Button>
          <p className="mt-9 text-foreground-grey text-center">
            Did not receive link? {"      "}
            <Button
              variant="ghost2"
              size="icon"
              className="text-secondary ml-1"
              onClick={handleResend}
              disabled={isLoading}
            >
              Resend
            </Button>
          </p>
        </div>
      </div>
      <div>
        <p className="mt-9 text-foreground-grey ">
          Oh, I have remembered my password!
          <Link href="/auth/login" className="text-secondary ml-1">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
