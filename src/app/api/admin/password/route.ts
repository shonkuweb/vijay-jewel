import { NextResponse } from "next/server";
import { setAdminPassword, getAdminPassword } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { newPassword } = await req.json();

    if (!newPassword || typeof newPassword !== "string" || newPassword.trim().length < 4) {
      return NextResponse.json(
        { success: false, message: "Password must be at least 4 characters long." },
        { status: 400 }
      );
    }

    setAdminPassword(newPassword.trim());

    return NextResponse.json({
      success: true,
      message: "Admin password updated successfully! Use this password for future logins.",
    });
  } catch (err) {
    console.error("Failed to update admin password:", err);
    return NextResponse.json(
      { success: false, message: "Failed to update admin password." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    success: true,
    currentPassword: getAdminPassword(),
  });
}
