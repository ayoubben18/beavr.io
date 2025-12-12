"use client";

import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import FormMessageBox from "@/components/ui/form-message";
import { authClient } from "@/lib/auth-client";

type VerificationState = "pending" | "verifying" | "success" | "error";

export default function VerifyEmailPage() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [state, setState] = useState<VerificationState>(
    token ? "verifying" : "pending"
  );
  const [isResending, setIsResending] = useState(false);

  const verifyEmail = useCallback(async () => {
    if (!token) return;

    try {
      const result = await authClient.verifyEmail({
        query: { token },
      });

      if (result.error) {
        setState("error");
      } else {
        setState("success");
      }
    } catch {
      setState("error");
      toast.error("Something went wrong. Please try again.");
    }
  }, [token]);

  useEffect(() => {
    if (token && state === "verifying") {
      verifyEmail();
    }
  }, [token, state, verifyEmail]);

  const handleResendVerification = async () => {
    setIsResending(true);
    try {
      await authClient.sendVerificationEmail({
        email: "",
        callbackURL: "/verify-email",
      });
      toast.success("Verification email sent");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsResending(false);
    }
  };

  return (
    <div className="w-full rounded-xl border border-border bg-background px-[54px] py-7">
      {/* Header */}
      <div className="flex flex-col items-center gap-1.5 text-center">
        <h1 className="font-serif text-2xl text-foreground">Verify your email</h1>
        <p className="text-sm text-muted-foreground">
          {state === "verifying"
            ? "Please wait while we verify your email..."
            : "We've sent a verification link to your email address"}
        </p>
      </div>

      {/* Status messages */}
      <div className="mt-6">
        {state === "verifying" && (
          <div className="flex justify-center py-4">
            <Loader2 className="size-8 animate-spin text-primary" />
          </div>
        )}

        {state === "success" && (
          <FormMessageBox
            variant="success"
            message="Email verified successfully"
            description="You can now sign in to your account"
          />
        )}

        {state === "error" && (
          <FormMessageBox
            variant="error"
            message="Email verification failed"
            description="This link has expired or is invalid"
          />
        )}

        {state === "pending" && (
          <FormMessageBox
            variant="warning"
            message="Check your inbox"
            description="Please check your email for the verification link"
          />
        )}
      </div>

      {/* Actions */}
      <div className="mt-8 space-y-4">
        {state === "success" ? (
          <Button asChild className="w-full">
            <Link href="/login">Sign in</Link>
          </Button>
        ) : (
          <>
            <Button
              onClick={handleResendVerification}
              disabled={isResending || state === "verifying"}
              variant="outline"
              className="w-full"
            >
              {isResending && <Loader2 className="size-4 animate-spin" />}
              Resend verification email
            </Button>
            <div className="text-center">
              <Link
                href="/login"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                Back to sign in
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
