/* eslint-disable no-unused-vars */
import React from 'react'
import {Link} from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Label } from "../components/ui/Label"


function Homepage() {
  return (
    <>
     <header className="py-12 md:py-16">
        <div className="container flex flex-col items-center justify-center px-4 md:px-6 space-y-4 text-center md:flex-row md:space-y-0">
          <img
            alt="Logo"
            className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center md:max-w-[400px]"
            height="150"
            src="/placeholder.svg"
            width="300"
          />
          <div className="space-y-4 text-center md:space-y-2 md:ml-auto md:max-w-sm lg:space-y-4 lg:max-w-md">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Welcome to TicketNest</h1>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-500">
                The all-in-one platform for managing customer support. Deliver exceptional service with ease.
              </p>
            </div>
            <div className="grid gap-2 min-[400px]:flex-row  flex-col">
              <Link
                to="/login"
                className="inline-flex h-10 items-center justify-center rounded-md border  border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900  dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:text-gray-50 dark:hover:text-white"
                
              >
                Get Started
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border  border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 d dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                href="#"
              >
                Tour the Platform
              </Link>
            </div>
          </div>
        </div>
      </header>
      <section className="py-12 md:py-16 xl:py-24">
        <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Quick and Easy Support</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-500">
              Streamline your support operations with a help desk that&apos;s simple to use and packed with features.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
            <div className="flex flex-col items-center justify-center space-y-2">
              <img
                alt="Image"
                className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                height="300"
                src="/placeholder.svg"
                width="500"
              />
            </div>
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="grid gap-2 text-left">
                <h3 className="text-2xl font-bold tracking-tight">Intuitive Ticketing</h3>
                <p className="text-gray-500 dark:text-gray-500">
                  Let your team focus on helping customers with an easy-to-use ticketing system.
                </p>
              </div>
              <div className="grid gap-2 text-left">
                <h3 className="text-2xl font-bold tracking-tight">Seamless Collaboration</h3>
                <p className="text-gray-500 dark:text-gray-500">
                  Assign tickets, add private notes, and collaborate with your team to resolve issues.
                </p>
              </div>
              <div className="grid gap-2 text-left">
                <h3 className="text-2xl font-bold tracking-tight">Customer Insights</h3>
                <p className="text-gray-500 dark:text-gray-500">
                  Understand your customers with built-in reporting and analytics to track ticket volume and response
                  times.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-12 md:py-16 lg:py-20 dark:bg-gray-800">
        <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              All Your Tickets in One Place
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-500">
              Easily manage customer inquiries with a unified inbox for email, chat, and social media.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col items-center justify-center space-y-2">
              <img
                alt="Image"
                className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                height="300"
                src="/placeholder.svg"
                width="500"
              />
            </div>
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="grid gap-2 text-left">
                <h3 className="text-2xl font-bold tracking-tight">Email Integration</h3>
                <p className="text-gray-500 dark:text-gray-500">
                  Convert customer emails into tickets and keep the conversation going without leaving the help desk.
                </p>
              </div>
              <div className="grid gap-2 text-left">
                <h3 className="text-2xl font-bold tracking-tight">Chat Support</h3>
                <p className="text-gray-500 dark:text-gray-500">
                  Provide real-time support with an integrated chat widget on your website.
                </p>
              </div>
              <div className="grid gap-2 text-left">
                <h3 className="text-2xl font-bold tracking-tight">Social Media</h3>
                <p className="text-gray-500 dark:text-gray-500">
                  Monitor and respond to customer messages on Facebook and Twitter from the help desk.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="grid gap-2 text-left">
                <h3 className="text-2xl font-bold tracking-tight">Email Integration</h3>
                <p className="text-gray-500 dark:text-gray-500">
                  Convert customer emails into tickets and keep the conversation going without leaving the help desk.
                </p>
              </div>
              <div className="grid gap-2 text-left">
                <h3 className="text-2xl font-bold tracking-tight">Chat Support</h3>
                <p className="text-gray-500 dark:text-gray-500">
                  Provide real-time support with an integrated chat widget on your website.
                </p>
              </div>
              <div className="grid gap-2 text-left">
                <h3 className="text-2xl font-bold tracking-tight">Social Media</h3>
                <p className="text-gray-500 dark:text-gray-500">
                  Monitor and respond to customer messages on Facebook and Twitter from the help desk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Collaborate on Customer Requests
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-500">
              Manage tasks and work together to solve customer issues with integrated task management.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col items-center justify-center space-y-2">
              <img
                alt="Image"
                className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                height="300"
                src="/placeholder.svg"
                width="500"
              />
            </div>
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="grid gap-2 text-left">
                <h3 className="text-2xl font-bold tracking-tight">Task Management</h3>
                <p className="text-gray-500 dark:text-gray-500">
                  Create tasks for customer requests and track progress to ensure nothing falls through the cracks.
                </p>
              </div>
              <div className="grid gap-2 text-left">
                <h3 className="text-2xl font-bold tracking-tight">Collaboration</h3>
                <p className="text-gray-500 dark:text-gray-500">
                  Assign tasks to team members, add comments, and share files to work together on solving customer
                  issues.
                </p>
              </div>
              <div className="grid gap-2 text-left">
                <h3 className="text-2xl font-bold tracking-tight">Customer History</h3>
                <p className="text-gray-500 dark:text-gray-500">
                  Access the complete history of customer interactions to provide personalized support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-12 md:py-16 lg:py-20 dark:bg-gray-800">
        <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Insights to Improve Support</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-500">
              Understand your team &apos;s performance and customer satisfaction with reporting and analytics.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col items-center justify-center space-y-2">
              <img
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                height="310"
                src="/placeholder.svg"
                width="550"
              />
            </div>
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="grid gap-2 text-left">
                <h3 className="text-2xl font-bold tracking-tight">Performance Metrics</h3>
                <p className="text-gray-500 dark:text-gray-500">
                  Track key metrics such as response time, resolution time, and customer satisfaction scores.
                </p>
              </div>
              <div className="grid gap-2 text-left">
                <h3 className="text-2xl font-bold tracking-tight">Team Productivity</h3>
                <p className="text-gray-500 dark:text-gray-500">
                  See how your team is performing and identify areas for improvement with detailed reporting.
                </p>
              </div>
              <div className="grid gap-2 text-left">
                <h3 className="text-2xl font-bold tracking-tight">Customer Satisfaction</h3>
                <p className="text-gray-500 dark:text-gray-500">
                  Measure customer happiness and use the insights to deliver better support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Manage Your Team with Ease</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-500">
              Powerful tools for managing user access, permissions, and settings.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col items-center justify-center space-y-2">
              <img
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                height="310"
                src="/placeholder.svg"
                width="550"
              />
            </div>
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="grid gap-2 text-left">
                <h3 className="text-2xl font-bold tracking-tight">User Management</h3>
                <p className="text-gray-500 dark:text-gray-500">
                  Easily add new agents, manage user roles, and deactivate accounts from a centralized dashboard.
                </p>
              </div>
              <div className="grid gap-2 text-left">
                <h3 className="text-2xl font-bold tracking-tight">Access Control</h3>
                <p className="text-gray-500 dark:text-gray-500">
                  Set granular permissions to control who can view, edit, and resolve tickets.
                </p>
              </div>
              <div className="grid gap-2 text-left">
                <h3 className="text-2xl font-bold tracking-tight">Customization</h3>
                <p className="text-gray-500 dark:text-gray-500">
                  Personalize the help desk with your branding, custom email templates, and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="border-t  border-gray-200  dark:border-gray-800">
        <div className="container grid items-center gap-4 px-4 py-12 text-center md:px-6 md:py-16 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Revolutionize Your Support?
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-500">
              Try TicketNest free for 30 days. No credit card required.
            </p>
          </div>
          <form className="mx-auto max-w-sm space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Enter your email</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>
            <Button size="lg" type="submit">
              Get Started
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}

function SquareIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
    </svg>
  )
}


function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}



export default Homepage