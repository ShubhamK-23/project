/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { Label } from "../ui/Label"
import {useForm} from 'react-hook-form'
import { Button, Input} from '../index'
import service from '../../appwrite/tickets/config'
import { useNavigate } from 'react-router-dom'
import { Textarea } from "../ui/Textarea"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select as CustomSelect } from "../Select";
import { RadioGroupItem, RadioGroup } from "../ui/RadioGroup"


const TicketForm = React.forwardRef( ({ ticket }, innerRef) => {
    const navigate = useNavigate();
    const [createdAt, setCreatedAt] = useState('');

    useEffect(() => {
        if (ticket && ticket.createdAt) {
            setCreatedAt(new Date(ticket.createdAt * 1000).toISOString().substr(0, 10));
        } else {
            setCreatedAt(new Date().toISOString().substr(0, 10));
        }
    }, [ticket]);
    
    const { register, handleSubmit } = useForm({  
        defaultValues: {
            ticketId: ticket?.ticketId || "",
            title: ticket?.title || "",
            description: ticket?.description || "",
            stauts: ticket?.status || "open",
            priority: ticket?.priority || "2 Normal",
            customerName: ticket?.customerName || "" ,
            responsiblePerson: ticket?.responsiblePerson || "",
            owner: ticket?.owner || "",
            createdAt: createdAt,
            updatedAt: new Date(),
            deadline: new Date(),
            notes: ticket?.notes || "",
            attachments: ticket?.attachments || "",
            tags: ticket?.tags || ""
        }
    });

    const submit = async (data) => {
        console.log("Submit button clicked");
        if (ticket) {
            const file = data.attachment[0] ? await service.uploadFile(data.attachment[0]) : null;

            if (file) {
                service.deleteFile(ticket.attachments);
            }

            const dbTicket = await service.updateTicket(ticket.$id, {
                ...data,
                attachments: file ? file.$id : undefined,
            });

            if (dbTicket) {
                navigate(`/tickets/${dbTicket.ticketId}`);
            }
        } else {
            const file = await service.uploadFile(data.attachment[0]);

            if (file) {
                const fileId = file.$id;
                data.attachments = fileId;
                const dbTicket = await service.createTicket({...data, userId: data.$id});

                if (dbTicket) {
                    navigate(`/tickets/${dbTicket.ticketId}`);
                }
            }
        }
        console.log(data)
    }

    return (
        <div className="flex flex-col min-h-screen gap-1 max-w-4xl mx-auto px-4 ">
        <div>
          <h1 className="text-3xl font-bold">Add New Ticket</h1>
          <p className="text-gray-500 dark:text-gray-400">Fill out the form to create a new ticket.</p>
        </div>
        <form ref={innerRef} onSubmit={handleSubmit(submit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="title">Title</Label>
                <Input label="Title :"
                        type="text" 
                        placeholder="Title"
                        className="mb-4"
                        {...register("title", { required: true })} 
                />
            </div>
            
            <div>
              <Label htmlFor="ticket-number">Ticket Number</Label>
              <Input label="Ticket Number :"
                     type="text"
                     placeholder="Ticket Number"
                     className="mb-4"
                     {...register("ticketId", { required: true })}
              />
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea label="Description :"
                        placeholder="Issue Details"
                        className="mb-4"
                        {...register("description", { required: true })} 
              />
            </div>
            <div>
              <Label htmlFor="status">Status</Label>
              <CustomSelect defaultValue="open" id="status" {...register("status", { required: true })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="open">Open</SelectItem>
                  <SelectItem value="PAC+">PAC+</SelectItem>
                  <SelectItem value="closed">Closed</SelectItem>
                  <SelectItem value="Pendimg reminder">Pendimg reminder</SelectItem>
                  <SelectItem value="W4CR">Wait For Customer Response</SelectItem>
                  <SelectItem value="W4IR">Wait For Internal Response</SelectItem>
                  <SelectItem value="W4UI">Wait For Update Install</SelectItem>
                  <SelectItem value="W4UR">Wait For Update Release</SelectItem>
                </SelectContent>
              </CustomSelect>
            </div>
          </div>
          <div className="space-y-4">
          <div>
              <Label htmlFor="customer-name">Customer Name</Label>
              <Input label="Customer Name :"
                     type="Text"
                     placeholder="CustomerName"
                     className="mb-4"
                     {...register("customerName", { required: true })} 
              />
            </div>
            <div>
              <Label htmlFor="priority">Priority</Label>
              <RadioGroup defaultValue="medium" id="priority" {...register("priority", { required: true })}>
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
              <CustomSelect defaultValue="john-doe" id="owner" {...register("owner", { required: true })}>
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
              <CustomSelect defaultValue="jane-smith" id="responsible" {...register("responsiblePerson", { required: true })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select responsible" />
                </SelectTrigger>
                <SelectContent >
                  <SelectItem value="john-doe">John Doe</SelectItem>
                  <SelectItem value="jane-smith">Jane Smith</SelectItem>
                  <SelectItem value="bob-johnson">Bob Johnson</SelectItem>
                </SelectContent>
              </CustomSelect>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="created-at">Created At</Label>
                  <Input type="date"
                          label="Created At"
                          className="mb-4"
                          {...register("createdAt", { required: true })} 
                  />
              </div>
              <div>
                <Label htmlFor="updated-at">Updated At</Label>
                <Input type="date"
                        label="Updated at"
                        className="mb-4"
                        {...register("updatedAt")}  />
              </div>
            </div>
          </div>
          <div className="col-span-2 space-y-4">
            <div>
              <Label htmlFor="work-done">Work Done</Label>
                <Textarea label="Work Done:"
                          placeholder="Work Done on the ticket"
                          className="mb-4"
                          {...register("workDone")}
                 />
            </div>
            <div>
              <Label htmlFor="attachments">Attachments</Label>
                <Input label="Attachments :"
                      type="file"
                      className="mb-4"
                      accept="image/png, image/jpg, image/jpeg, image/gif, File/rar , File/pdf, File/txt"
                      {...register("attachments")}
                />
            </div>
            <div>
              <Label htmlFor="tags">Tags</Label>
                <Input label="Tags:"
                      type="text"
                      placeholder="Tags related to ticket"
                      className="mb-4"
                      {...register("tags")} 
                />
            </div>
            {ticket && (
                    <div className="w-full mb-4">
                        <img
                            src={service.getPreviewFile(ticket.attachments)}
                            alt={ticket.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
          </div>
            <div className="flex justify-end">
            <Button type="submit" className="w-full"> 
                {ticket ? "Update" : "Submit"}
            </Button>
            </div>
        </form>
        
      </div>
    );
});

TicketForm.displayName = 'TicketForm';
 
export default TicketForm