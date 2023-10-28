"use client";

// import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertTriangleIcon, CheckCircleIcon, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@bricesuazo/ui/ui/form";
import { Input } from "@bricesuazo/ui/ui/input";
import { Textarea } from "@bricesuazo/ui/ui/textarea";

import { api } from "~/utils/api";

export function Contact() {
  const sendMessageMutation = api.www.sendMessage.useMutation({
    onSuccess: () => {
      form.reset();
    },
  });
  const formSchema = z.object({
    name: z.string().min(2, {
      message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
    message: z
      .string()
      .min(10, {
        message: "Message must be at least 10 characters.",
      })
      .max(500, {
        message: "Message must be less than 500 characters.",
      }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((values) =>
          sendMessageMutation.mutate(values),
        )}
        className="relative flex w-full flex-col items-center justify-center gap-4"
      >
        <div className="flex w-full gap-x-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>
                  Name{" "}
                  <span
                    aria-hidden={true}
                    className="cursor-help text-red-500"
                    title="Required"
                  >
                    *
                  </span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Juan Dela Cruz"
                    disabled={sendMessageMutation.isLoading}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>
                  Email Address{" "}
                  <span
                    aria-hidden={true}
                    className="cursor-help text-red-500"
                    title="Required"
                  >
                    *
                  </span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="juan@delacruz.com"
                    disabled={sendMessageMutation.isLoading}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>
                Message{" "}
                <span
                  aria-hidden={true}
                  className="cursor-help text-red-500"
                  title="Required"
                >
                  *
                </span>
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Hello there!"
                  disabled={sendMessageMutation.isLoading}
                  {...field}
                />
              </FormControl>
              <FormDescription className="text-right text-xs">
                {form.getValues("message")?.length ?? 0} / 500
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {sendMessageMutation.isSuccess && (
          <p className="flex items-center self-start text-green-500">
            <CheckCircleIcon className="mr-1 h-4 w-4" />
            Message sent!
          </p>
        )}
        {sendMessageMutation.isError && (
          <p className="flex items-center self-start text-red-400 ">
            <AlertTriangleIcon className="mr-1 h-4 w-4" />
            {sendMessageMutation.error.message}
          </p>
        )}
        <div className="w-full py-2">
          <button
            className="group ml-auto mt-2 flex w-fit rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 duration-200 hover:bg-blue-200 disabled:cursor-not-allowed disabled:opacity-50 motion-reduce:transition-none dark:bg-white/[10%] dark:text-white dark:hover:bg-white/[15%]"
            type="submit"
          >
            {sendMessageMutation.isLoading ? (
              <>
                Sending
                <Loader2 className="ml-2 mt-[2px] h-4 w-4 animate-spin duration-200 motion-reduce:transition-none" />
              </>
            ) : (
              <>
                Send
                <svg
                  className="ml-2 mt-[2px] h-4 w-4 duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </>
            )}
          </button>
        </div>
      </form>
    </Form>
  );
}
