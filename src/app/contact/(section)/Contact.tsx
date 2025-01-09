"use client";
import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Mail, MapPin, MoveRight, Phone } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

const FormValidation = z.object({
  name: z.string(),
  phone: z.string(),
  email: z.string(),
  reason: z.string(),
  message: z.string(),
});

type FormData = z.infer<typeof FormValidation>;

const Contact = ({}) => {
  const form = useForm<FormData>({
    resolver: zodResolver(FormValidation),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      reason: "",
      message: "",
    },
  });

  const onSubmit = (data: FormData) => {
    bookTableMutation.mutate(data);
  };

  const bookTableMutation = useMutation({
    mutationFn: async (values: z.infer<typeof FormValidation>) => {
      return await axios.post("/api/contact", values);
    },
    onSuccess: () => {
      toast.success(
        "Your message has been submitted successfully. We will get back to you soon",
      );
      form.reset();
    },
    onError: () => {
      toast.error(
        "There was an error submitting your message. Please try again later",
      );
    },
  });

  return (
    <section className="flex h-full w-full items-center justify-center bg-[#070707]">
      <div className="flex h-full w-full flex-col items-center justify-center gap-[2.5rem] px-0 pb-12 pl-0 md:px-2">
        <div className="flex w-full flex-col lg:flex-row">
          <div
            style={{ backgroundImage: "url(/images/contact/contact.png)" }}
            className="flex h-screen w-full items-center justify-center lg:ml-[-10px] lg:w-1/2"
          >
            <div className="h-7/12 flex w-full flex-col gap-16 px-3 md:w-7/12 md:px-0">
              <div className="flex w-full flex-col gap-10">
                <div className="flex w-full flex-col gap-2">
                  <p className="font-[Playfair] text-7xl font-extralight">
                    Get in touch
                  </p>
                  <p className="text-sm font-light">
                    Use the form on the right to send us a message.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Button
                    variant="ghost"
                    asChild
                    className="px-1 py-1 hover:bg-transparent"
                  >
                    <Link href="https://www.instagram.com/bavettesteakhouse/">
                      <span className="sr-only">Instagram</span>
                      <Icons.instagram className="hover:text-white" />
                    </Link>
                  </Button>
                  <Button
                    variant="ghost"
                    asChild
                    className="px-1 py-1 hover:bg-transparent"
                  >
                    <Link href="https://www.tripadvisor.com/Restaurant_Review-g186337-d23660134-Reviews-or30-Bavette_Steak_House_Liverpool-Liverpool_Merseyside_England.html">
                      <span className="sr-only">Trip Advisor</span>
                      <Icons.tripAdvisor className="hover:text-white" />
                    </Link>
                  </Button>
                  <Button
                    variant="ghost"
                    asChild
                    className="px-1 py-1 hover:bg-transparent"
                  >
                    <Link href="https://g.co/kgs/3rHehs1">
                      <span className="sr-only">Google</span>
                      <Icons.google className="hover:text-white" />
                    </Link>
                  </Button>
                  <Button
                    variant="ghost"
                    asChild
                    className="px-1 py-1 hover:bg-transparent"
                  >
                    <Link href="https://www.facebook.com/bavettesteakhouse/">
                      <span className="sr-only">Facebook</span>
                      <Icons.facebook className="hover:text-white" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-lg font-semibold">Working Hours</p>
                <div className="flex gap-7">
                  <div className="flex flex-col gap-2">
                    <p className="text-[#b3b3aa]">Saturday</p>
                    <p className="text-[#b3b3aa]">Sunday</p>
                    <p className="text-[#b3b3aa]">Monday</p>
                    <p className="text-[#b3b3aa]">Tuesday</p>
                    <p className="text-[#b3b3aa]">Wednesday</p>
                    <p className="text-[#b3b3aa]">Thursday</p>
                    <p className="text-[#b3b3aa]">Friday</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="flex gap-7 text-[#b3b3aa]">
                      <span>:</span>
                      <span>12 PM - 10:30 PM</span>
                    </p>
                    <p className="flex gap-7 text-[#b3b3aa]">
                      <span>:</span>
                      <span>12 PM - 10:30 PM</span>
                    </p>
                    <p className="flex gap-7 text-[#b3b3aa]">
                      <span>:</span>
                      <span>Closed</span>
                    </p>
                    <p className="flex gap-7 text-[#b3b3aa]">
                      <span>:</span>
                      <span>4 PM - 10:30 PM</span>
                    </p>
                    <p className="flex gap-7 text-[#b3b3aa]">
                      <span>:</span>
                      <span>4 PM - 10:30 PM</span>
                    </p>
                    <p className="flex gap-7 text-[#b3b3aa]">
                      <span>:</span>
                      <span>4 PM - 10:30 PM</span>
                    </p>
                    <p className="flex gap-7 text-[#b3b3aa]">
                      <span>:</span>
                      <span>12 PM - 10:30 PM</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col bg-[#070707] pb-24 pt-5 lg:w-1/2 lg:items-center lg:justify-center">
            <div className="flex w-full flex-col gap-6 px-3 lg:w-3/5 lg:px-0">
              <div className="flex gap-6">
                <div>
                  <div className="h-fit w-fit rounded-full bg-[#0f0f0f] p-2">
                    <MapPin className="text-[#b7955b]" />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <p>
                    49 Allerton Rd, Liverpool L25
                    <br />
                    7RE Bangkok
                  </p>
                  <Link href="https://maps.app.goo.gl/cQSqpbwsCze8TgcF7">
                    <p className="flex gap-2 text-sm text-[#b3b3aa]">
                      <span>Get Direction</span>
                      <MoveRight />
                    </p>
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div>
                  <div className="h-fit w-fit rounded-full bg-[#0f0f0f] p-2">
                    <Phone className="text-[#b7955b]" />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <Link href="tel:441539733733">
                    <p>+ 441539733733</p>
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div>
                  <div className="h-fit w-fit rounded-full bg-[#0f0f0f] p-2">
                    <Mail className="text-[#b7955b]" />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <Link href="mailto:info@Bangkok.co.uk">
                    <p>info@Bangkok.co.uk</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full px-3 lg:w-3/5 lg:px-0">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="h-full">
                  <div className="flex gap-4 pt-7">
                    <div className="flex w-full flex-col gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormControl>
                              <Input
                                placeholder="First Name"
                                {...field}
                                className="h-12 rounded-none border-b-[3px] border-l-0 border-r-0 border-t-0 border-b-[#323232] bg-[#0c0c0c] outline-none placeholder:text-[#787571] focus-visible:border-b-[2px] focus-visible:border-b-[#bc995d] focus-visible:ring-0"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormControl>
                              <Input
                                placeholder="Phone"
                                {...field}
                                className="h-12 rounded-none border-b-[3px] border-l-0 border-r-0 border-t-0 border-b-[#323232] bg-[#0c0c0c] outline-none placeholder:text-[#787571] focus-visible:border-b-[2px] focus-visible:border-b-[#bc995d] focus-visible:ring-0"
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
                            <FormControl>
                              <Input
                                placeholder="Email"
                                {...field}
                                className="h-12 rounded-none border-b-[3px] border-l-0 border-r-0 border-t-0 border-b-[#323232] bg-[#0c0c0c] outline-none placeholder:text-[#787571] focus-visible:border-b-[2px] focus-visible:border-b-[#bc995d] focus-visible:ring-0"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="reason"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormControl>
                              <Input
                                placeholder="Reason for contacting (optional)"
                                {...field}
                                className="h-12 rounded-none border-b-[3px] border-l-0 border-r-0 border-t-0 border-b-[#323232] bg-[#0c0c0c] outline-none placeholder:text-[#787571] focus-visible:border-b-[2px] focus-visible:border-b-[#bc995d] focus-visible:ring-0"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormControl>
                              <Textarea
                                placeholder="Your Message"
                                {...field}
                                className="h-24 rounded-none border-b-[3px] border-l-0 border-r-0 border-t-0 border-b-[#323232] bg-[#0c0c0c] outline-none placeholder:text-[#787571] focus-visible:border-b-[2px] focus-visible:border-b-[#bc995d] focus-visible:ring-0"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  <div className="flex w-full flex-col pt-7 lg:flex-row">
                    <Button
                      className="w-full"
                      disabled={bookTableMutation.isPending}
                    >
                      Contact US
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
        <div className="h-[500px] w-full max-w-[1300px] px-4 md:px-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3446.433514988319!2d-2.8691135!3d53.3742071!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b1f31e8b7489b%3A0xcec4ec7d21dc88df!2sBavette%20Steakhouse!5e1!3m2!1sen!2sin!4v1731058857722!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[500px] w-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
