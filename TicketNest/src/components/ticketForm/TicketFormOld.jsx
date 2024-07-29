/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Input } from '../index';
import service from '../../appwrite/tickets/config';
import { useNavigate } from 'react-router-dom';
import { Label } from "../ui/Label";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../ui/Card';
import { Textarea } from '../ui/Textarea';
import Select from "../ui/Select";
import '../../css/styles.css';

function TicketFormOld({ ticket }) {
    const navigate = useNavigate();
    const [createdAt, setCreatedAt] = useState('');
    const [updatedAt, setUpdatedAt] = useState('');
    const [previewUrl, setPreviewUrl] = useState(''); 
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        if (ticket) {
            setCreatedAt(ticket.createdAt ? new Date(ticket.createdAt).toISOString().substr(0, 10) : '');
            setUpdatedAt(ticket.updatedAt && ticket.updatedAt.length > 0 
                ? new Date(ticket.updatedAt[ticket.updatedAt.length - 1]).toISOString().substr(0, 10) 
                : '');

            if (ticket.attachments) {
                service.getPreviewFile(ticket.attachments).then(url => {
                setPreviewUrl(url);
                console.log(url);
                })
                .catch(error => {
                    console.error("Error fetching preview URL:", error);
                });
            }
        } else {
            const now = new Date().toISOString().substr(0, 10);
            setCreatedAt(now);
            setUpdatedAt(now);
        }
    }, [ticket]);

    const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm({
        defaultValues: {
            ticketId: ticket?.ticketId,
            title: ticket?.title || "",
            description: ticket?.description || "",
            status: ticket?.status || "Open",
            priority: ticket?.priority || "Low",
            customerName: ticket?.customerName || "",
            responsiblePerson: ticket?.responsiblePerson || "",
            owner: ticket?.owner || "",
            createdAt: createdAt,
            updatedAt: updatedAt,
            attachments: ticket?.attachments || "",
            tags: ticket?.tags || ""
        }
    });

    const watchedCreatedAt = watch("createdAt", createdAt);
    const watchedUpdatedAt = watch("updatedAt", updatedAt);

    useEffect(() => {
        setValue("createdAt", createdAt);
        setValue("updatedAt", updatedAt);
    }, [createdAt, updatedAt, setValue]);

    const submit = async (data) => {
        setErrorMessage(''); 
        const createdAtDate = new Date(data.createdAt);
        const updatedAtDate = new Date(data.updatedAt);

        if (updatedAtDate < createdAtDate) {
            setErrorMessage('Updation date cannot be earlier than ticket creation date.');
            return; 
        }

        try {
            let file;
            if (data.attachments && data.attachments[0]) {
                file = await service.uploadFile(data.attachments[0]);
            }

            const ticketData = {
                ticketId: data.ticketId,
                title: data.title,
                description: data.description,
                status: data.status,
                priority: data.priority,
                customerName: data.customerName,
                responsiblePerson: data.responsiblePerson,
                createdAt: createdAtDate.toISOString(),
                updatedAt: [updatedAtDate.toISOString()],
                workDone: data.workDone ? data.workDone.split('\n').filter(item => item.trim() !== '') : [],
                owner: data.owner,
                attachments: file ? file.$id : (ticket ? ticket.attachments : ""),
                tags: data.tags || ""
            };

            console.log("Ticket data being sent:", JSON.stringify(ticketData, null, 2));

            if (ticket) {
                if (file && ticket.attachments) {
                    await service.deleteFile(ticket.attachments);
                }

                const dbTicket = await service.updateTicket(ticket.ticketId, ticketData);

                if (dbTicket) {
                    navigate(`/ticket/${dbTicket.ticketId}`);
                }
            } else {
                if (file) {
                    data.attachments = file.$id;
                }

                const dbTicket = await service.createTicket(ticketData);

                if (dbTicket) {
                    navigate(`/ticket/${dbTicket.ticketId}`);
                }
            }
        } catch (error) {
            console.error("Error submitting form: ", error);
            console.error("Error details:", error.message, error.code, error.response);
        }
    };

    return (
        <Card className="w-full max-w-4xl">
            <form onSubmit={handleSubmit(submit)}>
                <CardHeader>
                    <CardTitle>{ticket ? "Edit Ticket" : "Add New Ticket"}</CardTitle>
                    <CardDescription>{ticket ? "Update the ticket information." : "Fill out the form to create a new ticket in TicketNest."}</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-6">
                    {errorMessage && (
                        <div className="text-red-500 mb-4">
                            {errorMessage}
                        </div>
                    )}
                    <div className="space-y-2">
                        <Label htmlFor="tags">Title</Label>
                        <Input
                            type="Text" 
                            id="title" 
                            placeholder="Enter ticket title"
                            className="mb-4"
                            {...register("title", { required: "Title is required" })} 
                        />
                        {errors.title && (
                            <p className="error-message">{errors.title.message}</p>
                        )}
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="Customer">Customer</Label>
                            <Input
                                label="Customer Name :"
                                type="Text"
                                placeholder="Customer Name"
                                className="mb-4"
                                {...register("customerName", { required: "Customer name is required" })} 
                            />
                            {errors.customerName && (
                                <p className="error-message">{errors.customerName.message}</p>
                            )}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="number">Ticket Number</Label>
                            <Input 
                                type="Text"
                                label="Ticket Number :"
                                placeholder="Ticket Number"
                                className="mb-4"
                                {...register("ticketId", { required: "Ticket number is required" })} 
                            />
                            {errors.ticketId && (
                                <p className="error-message">{errors.ticketId.message}</p>
                            )}
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                            type="Text"
                            label="Description :"
                            placeholder="Issue Details"
                            className="min-h-[150px]"
                            {...register("description", { required: "Description is required" })}
                        />
                        {errors.description && (
                            <p className="error-message">{errors.description.message}</p>
                        )}
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="status">Status</Label>
                            <Select
                                options={["Open", "Closed Successfully", "Closed Unsuccessfully", "Pending reminder", "PAC+", "Wait For Customer Response", "Wait For Internal Response", "Wait For Update Install" , "Wait For Update Release"]}
                                label="Status"
                                className="mb-4"
                                {...register("status", { required: "Status is required" })}
                            />
                            {errors.status && (
                                <p className="error-message">{errors.status.message}</p>
                            )}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="priority">Priority</Label>
                            <Select
                                options={["Low","Medium","High"]}
                                label="Priority"
                                className="mb-4"
                                {...register("priority", { required: "Priority is required" })}
                            />
                            {errors.priority && (
                                <p className="error-message">{errors.priority.message}</p>
                            )}
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
                                {...register("owner", { required: "Owner is required" })}
                            />
                            {errors.owner && (
                                <p className="error-message">{errors.owner.message}</p>
                            )}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="responsible">Responsible</Label>
                            <Select
                                options={["Person 1","Person 2","Person 3"]}
                                label="Responsible:"
                                placeholder="Responsible Person"
                                className="mb-4"
                                {...register("responsiblePerson", { required: "Responsible person is required" })} 
                            />
                            {errors.responsiblePerson && (
                                <p className="error-message">{errors.responsiblePerson.message}</p>
                            )}
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="created-at">Created At</Label>
                            <Input
                                type="date"
                                id="created-at"
                                className="mb-4"
                                value={watchedCreatedAt}
                                onChange={(e) => {
                                    setCreatedAt(e.target.value);                   
                                    setValue("createdAt", e.target.value);
                                }}
                                {...register("createdAt", { required: "Creation date is required" })}
                            />
                            {errors.createdAt && (
                                <p className="error-message">{errors.createdAt.message}</p>
                            )}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="updated-at">Updated At</Label>
                            <Input
                                type="date"
                                id="updated-at"
                                className="mb-4"
                                value={watchedUpdatedAt}
                                onChange={(e) => {
                                    setUpdatedAt(e.target.value);
                                    setValue("updatedAt", e.target.value);
                                }}
                                {...register("updatedAt")}
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="work-done">Work Done</Label>
                        <Textarea 
                            id="work-done" 
                            placeholder="Describe the work done (one item per line)" 
                            className="mb-4"
                            {...register("workDone")} 
                        />
                    </div>
                    <div className="space-y-2">
                    {previewUrl && (
                            <div className="mt-4">
                                <h4 className="text-sm font-medium mb-2">Attachment Preview:</h4>
                                <div className="border rounded-lg overflow-hidden" style={{maxWidth: '200px', maxHeight: '200px'}}>
                                    <img src={previewUrl} alt="Attachment Preview" className="w-full h-full object-cover"/>
                                </div>
                            </div>
                        )}
                        <Label htmlFor="attachments">Attachments</Label>
                        <div className="flex items-center space-x-2 mt-20">
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => document.getElementById('attachments').click()}
                            >
                                Choose File
                            </Button>
                            <span className="text-sm text-gray-500">
                                {watch("attachments") && watch("attachments")[0]
                                    ? watch("attachments")[0].name
                                    : "No file chosen"}
                            </span>
                            <Input 
                                id="attachments" 
                                type="file" 
                                className="hidden"
                                accept="image/png, image/jpg, image/jpeg, image/gif, application/pdf, text/plain"
                                {...register("attachments")}
                            />
                        </div>
                        
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
                    <Button variant="outline" onClick={() => navigate(-1)}>Cancel</Button>
                    <Button type="submit">
                        {ticket ? "Update Ticket" : "Create Ticket"}
                    </Button>
                </CardFooter>
            </form>
        </Card>
    );
}

export default TicketFormOld;
