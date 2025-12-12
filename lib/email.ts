import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_EMAIL = "Beavr <noreply@beavr.io>";

export async function sendVerificationEmail(email: string, url: string) {
  await resend.emails.send({
    from: FROM_EMAIL,
    to: email,
    subject: "Verify your email address",
    html: `
      <h2>Verify your email</h2>
      <p>Click the link below to verify your email address:</p>
      <a href="${url}" style="display: inline-block; padding: 12px 24px; background-color: #692e0e; color: white; text-decoration: none; border-radius: 6px;">
        Verify Email
      </a>
      <p>Or copy this link: ${url}</p>
      <p>This link will expire in 24 hours.</p>
    `,
  });
}

export async function sendPasswordResetEmail(email: string, url: string) {
  await resend.emails.send({
    from: FROM_EMAIL,
    to: email,
    subject: "Reset your password",
    html: `
      <h2>Reset your password</h2>
      <p>Click the link below to reset your password:</p>
      <a href="${url}" style="display: inline-block; padding: 12px 24px; background-color: #692e0e; color: white; text-decoration: none; border-radius: 6px;">
        Reset Password
      </a>
      <p>Or copy this link: ${url}</p>
      <p>This link will expire in 1 hour.</p>
      <p>If you didn't request this, you can safely ignore this email.</p>
    `,
  });
}
