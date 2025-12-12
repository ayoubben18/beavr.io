"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import FormMessageBox from "@/components/ui/form-message";
import { PasswordInput } from "@/components/ui/password-input";
import { authClient } from "@/lib/auth-client";
import {
  resetPasswordSchema,
  type ResetPasswordFormData,
} from "@/lib/validations/auth";

export default function ResetPasswordPage() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(!token ? "Invalid or expired link" : null);

  const form = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: ResetPasswordFormData) => {
    if (!token) {
      setError("Invalid or expired link");
      return;
    }

    setIsLoading(true);
    try {
      const result = await authClient.resetPassword({
        newPassword: data.password,
        token,
      });

      if (result.error) {
        setError("Invalid or expired link");
      } else {
        setIsSuccess(true);
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full rounded-xl border border-border bg-background px-[54px] py-7">
      {/* Header */}
      <div className="flex flex-col items-center gap-1.5 text-center">
        <h1 className="font-serif text-2xl text-foreground">Reset your password</h1>
        <p className="text-sm text-muted-foreground">Enter your new password below</p>
      </div>

      {error && (
        <div className="mt-6">
          <FormMessageBox
            variant="error"
            message={error}
            description="Please request a new password reset link"
            handleDismiss={() => setError(null)}
          />
        </div>
      )}

      {isSuccess && (
        <div className="mt-6">
          <FormMessageBox
            variant="success"
            message="Password reset successfully"
            description="You can now sign in with your new password"
          />
        </div>
      )}

      {/* Form */}
      {!isSuccess && !error && (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 space-y-8">
            <div className="space-y-5">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>New Password</FormLabel>
                    <FormControl>
                      <PasswordInput
                        placeholder="Enter your new password"
                        autoComplete="new-password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <PasswordInput
                        placeholder="Confirm your new password"
                        autoComplete="new-password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading && <Loader2 className="size-4 animate-spin" />}
              Reset password
            </Button>
          </form>
        </Form>
      )}

      {/* Action buttons for error/success states */}
      {(error || isSuccess) && (
        <div className="mt-8">
          <Button asChild className="w-full">
            <Link href={error ? "/forgot-password" : "/login"}>
              {error ? "Request new link" : "Sign in"}
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
}
