"use client"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useToast } from "@/hooks/use-toast"
import { insertContactFormSchema } from "@shared/schema"
import { apiRequest } from "@/lib/queryClient"
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Calendar, ArrowRight } from "lucide-react"
import { LoadingDots } from "@/components/loading-spinner"
import { z } from "zod"

const contactFormSchema = insertContactFormSchema.extend({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  projectType: z.string().min(1, "Please select a project type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export default function Contact() {
  const { toast } = useToast()

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      projectType: "",
      message: "",
    },
  })

  const submitContactForm = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest("POST", "/api/contact", data)
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. We will get back to you soon.",
      })
      form.reset()
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      })
    },
  })

  const onSubmit = (data: ContactFormData) => {
    submitContactForm.mutate(data)
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-gray-900 via-[var(--ethiopia-brown)] to-black overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-[var(--ethiopia-gold)]/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Get In{" "}
              <span className="text-[var(--ethiopia-gold)] relative">
                Touch
                <span className="absolute bottom-0 left-0 w-full h-2 bg-[var(--ethiopia-gold)]/30" />
              </span>
            </h1>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-12">
              Ready to start your construction project? Contact us today for a free consultation and quote
            </p>

            {/* Quick Contact Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {[
                { icon: <Phone className="h-8 w-8" />, label: "24/7 Support", value: "Always Available" },
                { icon: <MessageCircle className="h-8 w-8" />, label: "Response Time", value: "< 2 Hours" },
                { icon: <Calendar className="h-8 w-8" />, label: "Free Consultation", value: "Book Today" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-[var(--ethiopia-gold)] mb-3 flex justify-center">{stat.icon}</div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <span className="text-[var(--ethiopia-gold)] font-semibold text-lg">Contact Information</span>
                <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-8">Let's Start Building Together</h2>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: <MapPin className="h-6 w-6" />,
                    title: "Address",
                    content: ["Bole Road, Addis Ababa", "Ethiopia, 1000"],
                    color: "bg-blue-500",
                  },
                  {
                    icon: <Phone className="h-6 w-6" />,
                    title: "Phone",
                    content: ["+251 977 77-69-01", "+251 911 66-02-79"],
                    color: "bg-green-500",
                  },
                  {
                    icon: <Mail className="h-6 w-6" />,
                    title: "Email",
                    content: ["info@yoakinconstruction.com", "projects@yoakinconstruction.com"],
                    color: "bg-purple-500",
                  },
                  {
                    icon: <Clock className="h-6 w-6" />,
                    title: "Business Hours",
                    content: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 4:00 PM", "Sunday: Closed"],
                    color: "bg-orange-500",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className={`${item.color} text-white p-3 rounded-xl mr-4 flex-shrink-0`}>{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 text-lg">{item.title}</h4>
                      {item.content.map((line, i) => (
                        <p key={i} className="text-gray-600 leading-relaxed">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-r from-[var(--ethiopia-brown)] to-[var(--ethiopia-chocolate)] p-6 rounded-2xl text-white">
                <h4 className="font-bold mb-4 text-lg">Follow Our Projects</h4>
                <div className="flex space-x-4">
                  {["facebook-f", "linkedin-in", "instagram", "twitter"].map((platform) => (
                    <a
                      key={platform}
                      href="#"
                      className="w-12 h-12 bg-white/20 backdrop-blur-sm text-white rounded-xl flex items-center justify-center hover:bg-white/30 transition duration-300 hover:scale-110"
                    >
                      <i className={`fab fa-${platform}`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Send Us a Message</h3>
                <p className="text-gray-600">We'll get back to you within 24 hours</p>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 font-semibold">First Name</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="border-2 border-gray-200 focus:border-[var(--ethiopia-brown)] rounded-xl py-3"
                            />
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
                          <FormLabel className="text-gray-700 font-semibold">Last Name</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="border-2 border-gray-200 focus:border-[var(--ethiopia-brown)] rounded-xl py-3"
                            />
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
                        <FormLabel className="text-gray-700 font-semibold">Email Address</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            {...field}
                            className="border-2 border-gray-200 focus:border-[var(--ethiopia-brown)] rounded-xl py-3"
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
                      <FormItem>
                        <FormLabel className="text-gray-700 font-semibold">Phone Number</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            {...field}
                            className="border-2 border-gray-200 focus:border-[var(--ethiopia-brown)] rounded-xl py-3"
                          />
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
                        <FormLabel className="text-gray-700 font-semibold">Project Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="border-2 border-gray-200 focus:border-[var(--ethiopia-brown)] rounded-xl py-3">
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
                        <FormLabel className="text-gray-700 font-semibold">Message</FormLabel>
                        <FormControl>
                          <Textarea
                            rows={4}
                            placeholder="Tell us about your project..."
                            {...field}
                            className="border-2 border-gray-200 focus:border-[var(--ethiopia-brown)] rounded-xl"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[var(--ethiopia-brown)] to-[var(--ethiopia-chocolate)] hover:from-[var(--ethiopia-chocolate)] hover:to-[var(--ethiopia-brown)] text-white py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                    disabled={submitContactForm.isPending}
                  >
                    {submitContactForm.isPending ? (
                      <div className="flex items-center justify-center space-x-2">
                        <span>Sending</span>
                        <LoadingDots />
                      </div>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <Send className="h-5 w-5" />
                        Send Message
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-gradient-to-br from-[var(--ethiopia-beige)] to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Find Our Office</h2>
            <p className="text-xl text-gray-600">Located in the heart of Addis Ababa</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Map */}
            <div className="lg:col-span-2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-96 lg:h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.6177276513!2d38.76336931472!3d9.005401993527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sBole%20Rd%2C%20Addis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1635959542842!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-[var(--ethiopia-brown)]" />
                    <span className="font-semibold text-gray-900">Yoakin Construction</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1"> CMC Michael Ethiopain Economic Association, Addis Ababa, Ethiopia</p>
                </div>
              </div>
            </div>

            {/* Office Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Office Location</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-[var(--ethiopia-brown)]" />
                    <span className="text-gray-700"> CMC Michael Ethiopain Economic Association, Addis Ababa, Ethiopia</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-[var(--ethiopia-brown)]" />
                    <span className="text-gray-700">Mon-Fri: 8AM-6PM</span>
                  </div>
                </div>
              </div>

            

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Parking Available</h3>
                <p className="text-gray-600 text-sm">
                  Free parking available for all visitors. Accessible entrance and facilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Methods */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-[var(--ethiopia-brown)] to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-white mb-4">Need Immediate Assistance?</h3>
            <p className="text-xl text-gray-200">Choose the fastest way to reach us</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Phone className="h-8 w-8" />,
                title: "Call Now",
                description: "Speak directly with our team",
                action: "+251 911 66-02-79",
                color: "bg-green-500",
              },
              {
                icon: <Mail className="h-8 w-8" />,
                title: "Email Us",
                description: "Detailed project information",
                action: "info@yoakinconstruction.com",
                color: "bg-blue-500",
              },
              {
                icon: <MessageCircle className="h-8 w-8" />,
                title: "Live Chat",
                description: "Instant support available",
                action: "Start Chat",
                color: "bg-purple-500",
              },
            ].map((method, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`${method.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  {method.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{method.title}</h4>
                <p className="text-gray-300 mb-4">{method.description}</p>
                <p className="text-[var(--ethiopia-gold)] font-semibold">{method.action}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
