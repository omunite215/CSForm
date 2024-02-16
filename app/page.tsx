"use client";
import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import Image from "next/image";

export default function Home() {

  const [checked, setChecked] = useState(false);
  const [href, setHref] = useState("https://comsecaccount.netlify.app/");
  
  const OnChangeCheckbox = () => {
    setChecked(!checked);
    checked ? setHref("https://comsecaccount.netlify.app/") : setHref("https://cs-account-multiple.vercel.app/");
  }

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle className="flex gap-2 items-center"><Image src="/logo.png" width={28} height={28} alt="logo" /><span>ComSec360</span></CardTitle>
        <CardTitle className="my-2">Login Form</CardTitle>
        <CardDescription>Welcome to ComSec360</CardDescription>
      </CardHeader>
      <CardContent>
      <div className="flex items-center space-x-2 my-3">
      <Checkbox id="terms" checked={checked} onClick={OnChangeCheckbox} />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-5 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Check this box to sign in as CS Account Multiple
      </label>
    </div>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter you Username" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input name="password" type="password" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Link href={href} target="_blank">Login</Link>
      </CardFooter>
    </Card>
  )
}
