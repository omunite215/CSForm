"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <div className="flex gap-2 items-center justify-center">
          <Image src="/logo.png" width={32} height={32} alt="logo" priority />
          <div>
            <CardTitle>ComSec360</CardTitle>
            <CardDescription>Company Secretarial Management</CardDescription>
          </div>
        </div>
        <span className="py-3 text-center font-bold">Account User</span>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Email</Label>
              <Input id="name" placeholder="xyz@gmail.com" />
            </div>
            <div className="flex flex-col space-y-1.5 justify-start items-start">
              <Label htmlFor="password">Password</Label>
              <Input
                name="password"
                type="password"
                placeholder="***********"
              />
              <Button variant="link">Reset Password</Button>
            </div>
            <div className="flex flex-col space-y-1.5 justify-start items-start">
              <Label htmlFor="code">2 Factor Authentication Code</Label>
              <Input
                name="code"
                type="number"
                placeholder="****"
                maxLength={4}
              />
              <Button variant="link">Resend Code</Button>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Link
          href="https://comsecaccount.netlify.app/"
          className={buttonVariants()}
        >
          Login
        </Link>
      </CardFooter>
    </Card>
  );
}
