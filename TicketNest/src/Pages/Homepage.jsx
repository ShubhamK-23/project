import React from 'react';
import { Button } from "../components/ui/Button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../components/ui/Card";
import { TicketIcon, TagIcon, ClockIcon, UsersIcon, WebcamIcon, CheckIcon, BarChartIcon, PieChartIcon, DownloadIcon } from "../components/ui/Icons.jsx";
import './Homepage.css';
import { useSelector } from 'react-redux';

function Homepage() {
  const authStatus = useSelector((state) => state.auth.status);
  return authStatus ? (
    <div className="flex-1 space-y-2 pt-8 pl-64">
    <div className="flex-1 p-4 md:p-6 lg:p-8 overflow-hidden">
    <div className="flex min-h-[calc(100vh-4rem-2rem)]">
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-4 lg:gap-8">
        <Card className="homepage-section flex flex-col justify-start items-center p-4 md:p-6 lg:p-8">
          <div className="homepage-content max-w-3xl w-full text-center">
            <h1 className="homepage-title text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Welcome to TicketNest</h1>
            <img src="/Images/Ticket1.svg" alt="Ticket Background" className="homepage-image w-3/4 md:w-2/3 lg:w-1/2 mx-auto mb-6 object-cover" />
            <p className="text-base md:text-lg lg:text-xl mb-8">
              Streamline your customer service with our powerful ticket management and collaboration tools.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
              <Button
                variant="outline"
                size="lg"
                className="text-primary-foreground hover:bg-primary-foreground/20 w-full sm:w-auto">
                Get Started
              </Button>
              <Button
                variant="solid"
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 w-full sm:w-auto">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </Card>
        <div className="flex flex-col gap-4 mt-4 lg:mt-0">
              
              <Card>
                <CardHeader>
                  <CardTitle>Ticket Management</CardTitle>
                  <CardDescription>
                    Organize and prioritize your customer inquiries with our powerful ticket system.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2">
                      <TicketIcon className="w-5 h-5 text-muted-foreground" />
                      <span>Create and manage tickets</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TagIcon className="w-5 h-5 text-muted-foreground" />
                      <span>Categorize and tag tickets</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ClockIcon className="w-5 h-5 text-muted-foreground" />
                      <span>Set due dates and reminders</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Team Collaboration</CardTitle>
                  <CardDescription>Empower your team to work together seamlessly on customer issues.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2">
                      <UsersIcon className="w-5 h-5 text-muted-foreground" />
                      <span>Assign tickets to team members</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <WebcamIcon className="w-5 h-5 text-muted-foreground" />
                      <span>Communicate and share updates</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckIcon className="w-5 h-5 text-muted-foreground" />
                      <span>Collaborate on tasks and resolutions</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Reporting and Analytics</CardTitle>
                  <CardDescription>
                    Gain insights into your customer service performance with detailed reports.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2">
                      <BarChartIcon className="w-5 h-5 text-muted-foreground" />
                      <span>Track key metrics and KPIs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <PieChartIcon className="w-5 h-5 text-muted-foreground" />
                      <span>Visualize customer service data</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DownloadIcon className="w-5 h-5 text-muted-foreground" />
                      <span>Export reports and data</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              </div>
          </main>
        </div>
      </div>
      </div>
  ):
  <div className="flex-1 p-4 md:p-16 lg:p-14 overflow-hidden">
  <div className="flex min-h-[calc(100vh-4rem-2rem)]">
    <main className="flex-1 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-4 lg:gap-8">
      <Card className="homepage-section flex flex-col justify-start items-center p-4 md:p-6 lg:p-8">
        <div className="homepage-content max-w-3xl w-full text-center">
          <h1 className="homepage-title text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Welcome to TicketNest</h1>
          <img src="/Images/Ticket1.svg" alt="Ticket Background" className="homepage-image w-3/4 md:w-2/3 lg:w-1/2 mx-auto mb-6 object-cover" />
          <p className="text-base md:text-lg lg:text-xl mb-8">
            Streamline your customer service with our powerful ticket management and collaboration tools.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
            <Button
              variant="outline"
              size="lg"
              className="text-primary-foreground hover:bg-primary-foreground/20 w-full sm:w-auto">
              Get Started
            </Button>
            <Button
              variant="solid"
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 w-full sm:w-auto">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </Card>
      <div className="flex flex-col gap-4 mt-4 lg:mt-0">
            
            <Card>
              <CardHeader>
                <CardTitle>Ticket Management</CardTitle>
                <CardDescription>
                  Organize and prioritize your customer inquiries with our powerful ticket system.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  <div className="flex items-center gap-2">
                    <TicketIcon className="w-5 h-5 text-muted-foreground" />
                    <span>Create and manage tickets</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TagIcon className="w-5 h-5 text-muted-foreground" />
                    <span>Categorize and tag tickets</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ClockIcon className="w-5 h-5 text-muted-foreground" />
                    <span>Set due dates and reminders</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Team Collaboration</CardTitle>
                <CardDescription>Empower your team to work together seamlessly on customer issues.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  <div className="flex items-center gap-2">
                    <UsersIcon className="w-5 h-5 text-muted-foreground" />
                    <span>Assign tickets to team members</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <WebcamIcon className="w-5 h-5 text-muted-foreground" />
                    <span>Communicate and share updates</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckIcon className="w-5 h-5 text-muted-foreground" />
                    <span>Collaborate on tasks and resolutions</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Reporting and Analytics</CardTitle>
                <CardDescription>
                  Gain insights into your customer service performance with detailed reports.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  <div className="flex items-center gap-2">
                    <BarChartIcon className="w-5 h-5 text-muted-foreground" />
                    <span>Track key metrics and KPIs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <PieChartIcon className="w-5 h-5 text-muted-foreground" />
                    <span>Visualize customer service data</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DownloadIcon className="w-5 h-5 text-muted-foreground" />
                    <span>Export reports and data</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            </div>
        </main>
      </div>
    </div>
    ;
}

export default Homepage;
