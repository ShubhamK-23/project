import { Label } from "../components/ui/Label"
import { Input } from "../components/ui/Input";
import { Textarea } from "../components/ui/Textarea"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select as CustomSelect } from "../components/Select";
import { RadioGroupItem, RadioGroup } from "../components/ui/RadioGroup"
import { Button } from "../components/ui/Button"

export default function AddTicketPage() {
    return (
      <div className="container mx-auto mt--10 px-4 "style={{ marginTop: '-43.5rem' }}>
      <div className="flex flex-col gap-1 max-w-4xl mx-auto px-4 ">
        <div>
          <h1 className="text-3xl font-bold">Add New Ticket</h1>
          <p className="text-gray-500 dark:text-gray-400">Fill out the form to create a new ticket.</p>
        </div>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="title">Title</Label>
              <Input type="text" id="title" placeholder="Enter ticket title" />
            </div>
            <div>
              <Label htmlFor="ticket-number">Ticket Number</Label>
              <Input type= "text" id="ticket-number" placeholder="Enter ticket number" />
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
              <Input type="Tags" id="tags" placeholder="Enter tags (separated by commas)" />
            </div>
          </div>
        </form>
        <div className="flex justify-end">
          <Button>Save Ticket</Button>
        </div>
      </div>
      </div>
    )
  }