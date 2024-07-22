/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Input, } from '../index';
import service from '../../appwrite/tickets/config';
import { useNavigate } from 'react-router-dom';
//import Select from '../ui/Select';
import { Label } from "../ui/Label";
import { Card, CardHeader, CardTitle, CardDescription, CardContent,CardFooter} from '../ui/Card';
import { Textarea } from '../ui/Textarea';
import Select from "../ui/Select"



function TicketFormOld({ ticket }) {
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
            status: ticket?.status || "Open",
            priority: ticket?.priority || "Low",
            customerName: ticket?.customerName || "",
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
        try {
            let file;
            if (data.attachment && data.attachment[0]) {
                file = await service.uploadFile(data.attachment[0]);
            }

            if (ticket) {
                if (file) {
                    await service.deleteFile(ticket.attachments);
                }

                const dbTicket = await service.updateTicket(ticket.ticketId, {
                    ...data,
                    ticketId: data.ticketId,
                    attachments: file ? file.$id : ticket.attachments,
                    updatedAt: new Date().toISOString()
                });

                if (dbTicket) {
                    navigate(`/ticket/${dbTicket.ticketId}`);
                }
            } else {
                if (file) {
                    data.attachments = file.$id;
                }

                const dbTicket = await service.createTicket({
                    ...data,
                    ticketId: data.ticketId,
                    updatedAt: new Date().toISOString()
                });

                if (dbTicket) {
                    navigate(`/ticket/${dbTicket.ticketId}`);
                }
            }
        } catch (error) {
            console.error("Error submitting form: ", error);
        }
    };

    return (
        (<Card className="w-full max-w-4xl">
        <form onSubmit={handleSubmit(submit)}>
          <CardHeader>
            <CardTitle>Add New Ticket</CardTitle>
            <CardDescription>Fill out the form to create a new ticket in TicketNest.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
          <div className="space-y-2">
              <Label htmlFor="tags">Title</Label>
              <Input
                    type="Text" 
                    id="title" 
                    placeholder="Enter ticket title"
                    className="mb-4"
                    {...register("title", { required: true })} 
                />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="title">Customer</Label>
                <Input
                    label="Customer Name :"
                    type="Text"
                    placeholder="CustomerName"
                    className="mb-4"
                    {...register("customerName", { required: true })} 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="number">Ticket Number</Label>
                <Input 
                    type="Text"
                    label="Ticket Number :"
                    placeholder="Ticket Number"
                    className="mb-4"
                    {...register("ticketId", { required: true })} 
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                    type="Text"
                    label="Description :"
                    placeholder="Issue Details"
                    className="min-h-[150px]"
                    {...register("description", { required: true })}
                />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Select
                    options={["Open", "Closed Successfully", "Closed Unsuccessfully", "Pending reminder", "PAC+", "Wait For Customer Response", "Wait For Internal Response", "Wait For Update Install" , "Wait For Update Release"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="priority">Priority</Label>
                <Select
                    options={["Low","Medium","High"]}
                    label="Priority"
                    className="mb-4"
                    {...register("priority", { required: true })}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="owner">Owner</Label>
                <Select
                    options={["Person 1","Person 2","Person 3"]}
                    label="Owner:"
                    placeholder="Owner of the ticket"
                    className="mb-4"
                    {...register("owner", { required: true })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="responsible">Responsible</Label>
                <Select
                    options={["Person 1","Person 2","Person 3"]}
                    label="Responsible:"
                    placeholder="Responsible Person"
                    className="mb-4"
                    {...register("responsiblePerson", { required: true })} 
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="created-at">Created At</Label>
                <Input
                    type="date"
                    label="Created At"
                    className="mb-4"
                    {...register("createdAt", { required: true })} 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="updated-at">Updated At</Label>
                <Input
                    type="date"
                    label="Updated At"
                    className="mb-4"
                    {...register("updatedAt")}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="work-done">Work Done</Label>
              <Textarea 
                    id="work-done" 
                    placeholder="Describe the work done" 
                    className="mb-4"
                    {...register("workDone")} 
                />
            </div>
            <div className="space-y-2">
              <Label htmlFor="attachments">Attachments</Label>
              <Input 
                id="attachments" 
                type="file" multiple
                className="mb-4"
                accept="image/png, image/jpg, image/jpeg, image/gif, File/rar , File/pdf, File/txt"
                {...register("attachment")}
            />

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
            <div className="space-y-2">
              <Label htmlFor="tags">Tags</Label>
              <Input
                type="Text" 
                id="tags" 
                placeholder="Enter tags separated by commas"
                className="mb-4"
                {...register("tags")} 
                />
            </div>
          </CardContent>
          <CardFooter className="flex justify-end gap-2">
            <Button variant="outline">Cancel</Button>
            <Button type="submit" >
                    {ticket ? "Update Ticket" : "Create Ticket"}
            </Button>
            
          </CardFooter>
         </form>
        </Card>)
    );
}

export default TicketFormOld;