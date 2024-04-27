/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import {useForm} from 'react-hook-form'
import { Button, Input, Select} from '../index'
import service from '../../appwrite/tickets/config'
import { useNavigate } from 'react-router-dom'


function TicketForm({ticket}) {
    const navigate = useNavigate();
    

    const { register, handleSubmit, } = useForm({  
        defaultValues: {
            ticketId: ticket?.ticketId || "",
            title: ticket?.title || "",
            description: ticket?.description || "",
            stauts: ticket?.status || "open",
            priority: ticket?.prioroty || "2 Normal",
            customerName: ticket?.customerName || "" ,
            responsiblePerson: ticket?.responsiblePerson || "",
            owner: ticket?.owner || "",
            createdAt: new Date(ticket?.createdAt *  1000).toISOString().substr(0, 10),
            updatedAt: new Date(),
            deadline: new Date(),
            notes: ticket?.notes || "",
            attachments: ticket?.attachments || "",
            tags: ticket?.tags || ""
        }
    });

    const submit = async (data) => {
            if(ticket)
                {
                const file = data.attachment[0] ? await service.uploadFile(data.attachment[0]) : null;

                if(file){
                    service.deleteFile(ticket.attachments);
                }

                const dbTicket = await service.updateTicket(ticket.$id,{
                    ...data,
                    attachments: file ? file.$id : undefined,
                });

                if (dbTicket){
                    navigate( `/tickets/${dbTicket.ticketId}`);
                }
            }else {
                const file = await service.uploadFile(data.attachment[0]);

                if(file) {
                    const fileId = file.$id;
                    data.attachments = fileId;
                    const dbTicket = await service.createTicket(data)

                    if(dbTicket){
                        navigate( `/tickets/${dbTicket.ticketId}`);
                    }

                }
            }
    }

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />

                <Input
                    label="Ticket Number :"
                    placeholder="Ticket Number"
                    className="mb-4"
                    {...register("ticketId", { required: true })}
                    
                />

                <Input
                    label="Customer Name :"
                    placeholder="CustomerName"
                    className="mb-4"
                    {...register("customerName", { required: true })}
                    
                />

                <Input
                    label="Description :"
                    placeholder="Issue Details"
                    className="mb-4"
                    {...register("description", { required: true })}
                    
                />

                <Select
                    options={["Open", "Closed Successfully", "Closed Unsuccessfully", "Pendimg reminder", "PAC+", "Wait For Customer Response", "Wait For Internal Response", "Wait For Update Install" , "Wait For Update Release"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />

                <Select
                    options={["Low","Medium","High"]}
                    label="Priority"
                    className="mb-4"
                    {...register("priority", { required: true })}
                />

                <Input
                    label="Owner:"
                    placeholder="Owner of the ticket"
                    className="mb-4"
                    {...register("owner", { required: true })}
                    
                />

                <Input
                    label="Responsible:"
                    placeholder="Responsible Person"
                    className="mb-4"
                    {...register("responsiblePerson", { required: true })}
                    
                />

                <Input
                    type="date"
                    label="Created At"
                    className="mb-4"
                    {...register("createdAt", { required: true })}
                    
                />

                <Input
                    type="date"
                    label="Updated At"
                    className="mb-4"
                    {...register("updatedAt")}
                    
                />

                <Input
                    type="date"
                    label="Deadline"
                    className="mb-4"
                    {...register("updatedAt")}
                    
                />


                <Input
                    label="Work Done:"
                    placeholder="Work Done on the ticket"
                    className="mb-4"
                    {...register("workDone")}
                    
                />

                <Input
                    label="Notes:"
                    placeholder="Notes about the ticket"
                    className="mb-4"
                    {...register("notes")}
                    
                />

                <Input
                    label="Tags:"
                    placeholder="Tags related to ticket"
                    className="mb-4"
                    {...register("tags")}                    
                />

            </div>
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

                <Button type="submit" bgColor={ticket ? "bg-green-500" : undefined} className="w-full">
                    {ticket ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    );
}

    
export default TicketForm