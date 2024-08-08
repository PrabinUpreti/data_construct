"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useLoginRequest from "@/api/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAuthToken } from "@/redux/appSlice";

const formSchema = z.object({
  username: z.string().min(1, {
    message: "Username shouldn't be empty",
  }),
  password: z.string().min(1, {
    message: "Password shouldn't be empty",
  }),
});

export function ProfileForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorMssg, setErrorMsg] = useState("");
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const res = await useLoginRequest(values);
    console.log(res?.data?.token);
    if (!res) {
      setErrorMsg("Incorrect username or password");
      setTimeout(() => {
        setErrorMsg("");
      }, 3000);
    } else {
      toast.success("Logged In Sucessfully", { position: "bottom-right" });
      setErrorMsg("");
      dispatch(setAuthToken(res?.data?.token));
      navigate("/crud");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="password" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <p className="text-red-600">{errorMssg}</p>
        <Button className="mt-0" type="submit">
          Login
        </Button>
      </form>
    </Form>
  );
}
