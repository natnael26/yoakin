import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { insertContactFormSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { LoadingDots } from "@/components/loading-spinner";
import { ContactIllustration } from "@/components/illustrations";
import { z } from "zod";

const contactFormSchema = insertContactFormSchema.extend({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  projectType: z.string().min(1, "Please select a project type"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      projectType: "",
      message: ""
    }
  });

  const submitContactForm = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. We will get back to you soon.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: ContactFormData) => {
    submitContactForm.mutate(data);
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Get In <span className="text-[var(--ethiopia-brown)]">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your construction project? Contact us today for a free consultation and quote
            </p>
          </div>
        </div>
      </section>

      {/* Illustration Section */}
      <section className="py-12 bg-[var(--ethiopia-beige)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-white to-[var(--ethiopia-beige)] p-8 rounded-xl shadow-lg">
            <ContactIllustration />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-[var(--ethiopia-brown)] mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-600">
                      Bole Road, Addis Ababa<br />
                      Ethiopia, 1000
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-[var(--ethiopia-brown)] mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600">+251 11 XXX XXXX</p>
                    <p className="text-gray-600">+251 9XX XXX XXX</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-[var(--ethiopia-brown)] mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">info@habeshaconstruction.com</p>
                    <p className="text-gray-600">projects@habeshaconstruction.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-[var(--ethiopia-brown)] mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Business Hours</h4>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 4:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="mt-8">
                <h4 className="font-semibold text-gray-900 mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {["facebook-f", "linkedin-in", "instagram", "twitter"].map((platform) => (
                    <a 
                      key={platform}
                      href="#" 
                      className="w-10 h-10 bg-[var(--ethiopia-brown)] text-white rounded-full flex items-center justify-center hover:bg-[var(--ethiopia-chocolate)] transition duration-300"
                    >
                      <i className={`fab fa-${platform}`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-xl p-8 animate-fade-in-up delay-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input type="tel" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="projectType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select Project Type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="residential">Residential Construction</SelectItem>
                            <SelectItem value="commercial">Commercial Projects</SelectItem>
                            <SelectItem value="infrastructure">Infrastructure</SelectItem>
                            <SelectItem value="industrial">Industrial Construction</SelectItem>
                            <SelectItem value="renovation">Renovation & Restoration</SelectItem>
                            <SelectItem value="consulting">Project Management</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            rows={4} 
                            placeholder="Tell us about your project..." 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full bg-[var(--ethiopia-brown)] hover:bg-[var(--ethiopia-chocolate)] text-white py-3 font-semibold hover-lift"
                    disabled={submitContactForm.isPending}
                  >
                    {submitContactForm.isPending ? (
                      <div className="flex items-center justify-center space-x-2">
                        <span>Sending</span>
                        <LoadingDots />
                      </div>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Contact Methods */}
      <section className="py-16 bg-[var(--ethiopia-beige)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">More Ways to Reach Us</h3>
            <p className="text-lg text-gray-600">Choose the method that works best for you</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-6 rounded-xl shadow-lg animate-fade-in-up hover-lift">
              <div className="w-16 h-16 bg-[var(--ethiopia-brown)] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Call Us</h4>
              <p className="text-gray-600 mb-4">Speak directly with our team</p>
              <p className="text-[var(--ethiopia-brown)] font-semibold">+251 11 XXX XXXX</p>
            </div>
            
            <div className="text-center bg-white p-6 rounded-xl shadow-lg animate-fade-in-up delay-200 hover-lift">
              <div className="w-16 h-16 bg-[var(--ethiopia-brown)] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Email Us</h4>
              <p className="text-gray-600 mb-4">Send us detailed information</p>
              <p className="text-[var(--ethiopia-brown)] font-semibold">info@habeshaconstruction.com</p>
            </div>
            
            <div className="text-center bg-white p-6 rounded-xl shadow-lg animate-fade-in-up delay-400 hover-lift">
              <div className="w-16 h-16 bg-[var(--ethiopia-brown)] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Visit Our Office</h4>
              <p className="text-gray-600 mb-4">Meet us in person</p>
              <p className="text-[var(--ethiopia-brown)] font-semibold">Bole Road, Addis Ababa</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
