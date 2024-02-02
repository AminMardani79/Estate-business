import User from "@/models/User";
import { hashPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { email, password } = await req.body;

    await connectDB();

    if (!email || !password) {
      return NextResponse.json(
        { error: "لطفا ایمیل و رمزعبور خود را وارد کنید" },
        {
          status: 422,
        }
      );
    }

    const existUser = await User.findOne({ email });

    if (existUser) {
      return NextResponse.json(
        { data: "کاربر یافت شد" },
        {
          status: 422,
        }
      );
    }

    const newUser = await User.create({
      email,
      password: hashPassword(password),
    });

    console.log(newUser);
    return NextResponse.json(
      { data: "کاربر با موفقیت ایجاد شد" },
      { status: 201 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
