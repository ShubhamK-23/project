/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Input, } from '../index';
import service from '../../appwrite/tickets/config';
import { useNavigate } from 'react-router-dom';
import Select from '../ui/Select';
import { Label } from "../ui/Label";

function TicketFormOld({ ticket }) {
    const navigate = useNavigate();
    const [createdAt, setCreatedAt] = useState('');

    useEffect(() => {
        if (ticket && ticket.createdAt) {
            setCreatedAt(new Date(ticket.createdAt * 1000).toISOString().substr(0, 10));
        } else {
            setCreatedAt(new Date().toISOString().substr(0, 10)); // Set current date as default
        }
    }, [ticket]);

    const { register, handleSubmit } = useForm({
        defaultValues: {
            ticketId: ticket?.ticketId || "",
            title: ticket?.title || "",
            description: ticket?.description || "",
            status: ticket?.status || "Open",
            priority: ticket?.priority || "2 Normal",
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
                });

                if (dbTicket) {
                    navigate(`/tickets/${dbTicket.ticketId}`);
                }
            } else {
                if (file) {
                    data.attachments = file.$id;
                }

                const dbTicket = await service.createTicket({
                    ...data,
                    ticketId: data.ticketId
                });

                if (dbTicket) {
                    navigate(`/tickets/${dbTicket.ticketId}`);
                }
            }
        } catch (error) {
            console.error("Error submitting form: ", error);
        }
    };

    return (
        <div className="flex flex-col min-h-screen gap-1 max-w-4xl mx-auto px-4 ">
            <div>
                <h1 className="text-3xl font-bold">Add New Ticket</h1>
                <p className="text-gray-500 dark:text-gray-400">Fill out the form to create a new ticket.</p>
            </div>
            <form onSubmit={handleSubmit(submit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                    <div>
                        <Input
                            type="Text"
                            label="Title :"
                            placeholder="Title"
                            className="mb-4"
                            {...register("title", { required: true })}
                        />
                    </div>
                    <div>
                        <Input
                            type="Text"
                            label="Ticket Number :"
                            placeholder="Ticket Number"
                            className="mb-4"
                            {...register("ticketId", { required: true })}   
                        />
                    </div>
                    <div>
                        <Input
                            label="Customer Name :"
                            type="Text"
                            placeholder="CustomerName"
                            className="mb-4"
                            {...register("customerName", { required: true })}
                        />
                    </div>
                    <div>
                        <Input
                            type="Text"
                            label="Description :"
                            placeholder="Issue Details"
                            className="mb-4"
                            {...register("description", { required: true })}
                        />
                    </div>
                    <div>
                        <Label>Status</Label>
                        <Select
                            options={["Open", "Closed Successfully", "Closed Unsuccessfully", "Pending reminder", "PAC+", "Wait For Customer Response", "Wait For Internal Response", "Wait For Update Install" , "Wait For Update Release"]}
                            label="Status"
                            className="mb-4"
                            {...register("status", { required: true })}
                        />
                    </div>
                </div>
                <div className="space-y-4">
                    <div>
                        <Label>Priority</Label>
                        <Select
                            options={["Low","Medium","High"]}
                            label="Priority"
                            className="mb-4"
                            {...register("priority", { required: true })}
                        />
                    </div>
                    <div>
                        <Label>Owner</Label>
                        <Select
                            options={["Person 1","Person 2","Person 3"]}
                            label="Owner:"
                            placeholder="Owner of the ticket"
                            className="mb-4"
                            {...register("owner", { required: true })}
                        />
                    </div>
                    <div>
                        <Label>Responsible</Label>
                        <Select
                            options={["Person 1","Person 2","Person 3"]}
                            label="Responsible:"
                            placeholder="Responsible Person"
                            className="mb-4"
                            {...register("responsiblePerson", { required: true })} 
                        />
                    </div>
                    <div>
                        <Label>Created at</Label>
                        <Input
                            type="date"
                            label="Created At"
                            className="mb-4"
                            {...register("createdAt", { required: true })} 
                        />
                    </div>
                    <div>
                        <Label>Updated at</Label>
                        <Input
                            type="date"
                            label="Updated At"
                            className="mb-4"
                            {...register("updatedAt")}
                        />
                    </div>
                    <div>
                        <Label>Deadline</Label>
                        <Input
                            type="date"
                            label="Deadline"
                            className="mb-4"
                            {...register("deadline")} 
                        />
                    </div>
                    <div>
                        <Input
                            type="Text"
                            label="Work Done:"
                            placeholder="Work Done on the ticket"
                            className="mb-4"
                            {...register("workDone")}
                        />
                    </div>
                    <div>
                        <Input
                            type="Text"
                            label="Notes:"
                            placeholder="Notes about the ticket"
                            className="mb-4"
                            {...register("notes")}
                        />
                    </div>

                    <Input
                        type="Text"
                        label="Tags:"
                        placeholder="Tags related to ticket"
                        className="mb-4"
                        {...register("tags")}                    
                    />

                    <div className="w-1/3 px-2">
                        <Input
                            label="Attachments :"
                            type="file"
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

                        <Button type="submit" className="w-full">
                            {ticket ? "Update" : "Submit"}
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default TicketFormOld;
