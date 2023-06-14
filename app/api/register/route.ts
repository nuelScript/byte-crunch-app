import bcrypt from "bcrypt";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import { isSchoolMail } from "@/app/libs/validators";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, name, password } = body;

  const isValidMail = isSchoolMail(email, "stu.cu.edu.ng");
  if (!isValidMail) {
    return NextResponse.json(
      {
        message: "Invalid email address",
      },
      {
        status: 400,
      }
    );
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
    data: {
      email,
      name,
      hashedPassword,
    },
  });

  return NextResponse.json(user);
}
