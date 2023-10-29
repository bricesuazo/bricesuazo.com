"use client";

// import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AlertTriangleIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  Loader2,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@bricesuazo/ui/ui/button";
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

import { api } from "~/trpc/client";

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
        <div className="flex w-full flex-col gap-4 sm:flex-row md:flex-col lg:flex-row">
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
            Message sent! I&apos;ll get back to you as soon as possible.
          </p>
        )}
        {sendMessageMutation.isError && (
          <p className="flex items-center self-start text-red-400 ">
            <AlertTriangleIcon className="mr-1 h-4 w-4" />
            {sendMessageMutation.error.message}
          </p>
        )}

        <Button
          className="ml-auto"
          type="submit"
          disabled={sendMessageMutation.isLoading}
        >
          {sendMessageMutation.isLoading ? (
            <>
              Sending
              <Loader2 size="1rem" className="ml-2 animate-spin" />
            </>
          ) : (
            <>
              Send
              <ArrowRightIcon size="1rem" className="ml-2" />
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}
