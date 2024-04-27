import { Label } from "../components/ui/Label"
import { Input } from "../components/ui/Input";
import {Link} from "react-router-dom";
import {Package2Icon,SearchIcon } from '../components/ui/Icons'
import { Textarea } from "../components/ui/Textarea"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select as CustomSelect } from "../components/Select";
import { RadioGroupItem, RadioGroup } from "../components/ui/RadioGroup"
import { Button } from "../components/ui/Button"
import SideBar from "../components/sidebar/Sidebar";
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "../components/ui/Dropdown-menu";


export function AddTicketPage() {
    return (
        <div key="1" className="flex min-h-screen w-full">
        <div className="grid min-h-screen items-start w-full gap-2 lg:grid-cols-[280px_1fr]">
        <SideBar> </SideBar>
        <div className="flex flex-col">
          <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6">
            <Link className="lg:hidden" href="#">
              <Package2Icon className="h-6 w-6" />
              <span className="sr-only text-gray-500">Home</span>
            </Link>
            <div className="w-full flex-1">
              <form>
                <div className="relative">
                  <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 " />
                  <Input
                    className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3"
                    placeholder="Search"
                    type="search"
                  />
                </div>
              </form>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className="rounded-full border border-gray-200 w-8 h-8 "
                  size="icon"
                  variant="ghost"
                >
                  <img
                    alt="Avatar"
                    className="rounded-full"
                    height="32"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "32/32",
                      objectFit: "cover",
                    }}
                    width="32"
                  />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </header>

          <div className="flex-1 p-6">
          <div className="flex flex-col gap-8 max-w-4xl ml-6 mr-auto">
            <div>
              <h1 className="text-3xl font-bold">Add New Ticket</h1>
              <p className="text-gray-500">Fill out the form to create a new ticket.</p>
            </div>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title">Title</Label>
                  <Input type="title" id="title" placeholder="Enter ticket title" />
                </div>
                <div>
                  <Label htmlFor="ticket-number">Ticket Number</Label>
                  <Input type="ticketnumber" id="ticket-number" placeholder="Enter ticket number" />
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea className="min-h-[120px]" id="description" placeholder="Enter ticket description" />
                </div>
                <div>
                  <Label htmlFor="status">Status</Label>
                  <CustomSelect defaultValue="open" id="status">
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="open">Open</SelectItem>
                      <SelectItem value="in-progress">In Progress</SelectItem>
                      <SelectItem value="closed">Closed</SelectItem>
                    </SelectContent>
                  </CustomSelect>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="priority">Priority</Label>
                  <RadioGroup defaultValue="medium" id="priority">
                    <div className="flex items-center gap-2">
                      <RadioGroupItem id="priority-low" value="low" />
                      <Label htmlFor="priority-low">Low</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem id="priority-medium" value="medium" />
                      <Label htmlFor="priority-medium">Medium</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem id="priority-high" value="high" />
                      <Label htmlFor="priority-high">High</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div>
                  <Label htmlFor="owner">Owner</Label>
                  <CustomSelect defaultValue="john-doe" id="owner">
                    <SelectTrigger>
                      <SelectValue placeholder="Select owner" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="john-doe">John Doe</SelectItem>
                      <SelectItem value="jane-smith">Jane Smith</SelectItem>
                      <SelectItem value="bob-johnson">Bob Johnson</SelectItem>
                    </SelectContent>
                  </CustomSelect>
                </div>
                <div>
                  <Label htmlFor="responsible">Responsible</Label>
                  <CustomSelect defaultValue="jane-smith" id="responsible">
                    <SelectTrigger>
                      <SelectValue placeholder="Select responsible" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="john-doe">John Doe</SelectItem>
                      <SelectItem value="jane-smith">Jane Smith</SelectItem>
                      <SelectItem value="bob-johnson">Bob Johnson</SelectItem>
                    </SelectContent>
                  </CustomSelect>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="created-at">Created At</Label>
                    <Input id="created-at" type="datetime-local" />
                  </div>
                  <div>
                    <Label htmlFor="updated-at">Updated At</Label>
                    <Input id="updated-at" type="datetime-local" />
                  </div>
                </div>
              </div>
              <div className="col-span-2 space-y-4">
                <div>
                  <Label htmlFor="work-done">Work Done</Label>
                  <Textarea className="min-h-[120px]" id="work-done" placeholder="Enter work done" />
                </div>
                <div>
                  <Label htmlFor="attachments">Attachments</Label>
                  <Input id="attachments" multiple type="file" />
                </div>
                <div>
                  <Label htmlFor="tags">Tags</Label>
                  <Input type="tags" id="tags" placeholder="Enter tags (separated by commas)" />
                </div>
              </div>
            </form>
            <div className="flex justify-end">
              <Button>Save Ticket</Button>
            </div>
          </div>
        </div>
        </div>
      </div>
      </div>
      
    
    )
  }