/* eslint-disable no-unreachable */
import { Client, ID, Databases, Storage,Query } from "appwrite";
import conf from '../../conf';

export class Services {
    client = new Client();
    databases;
    storage;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client)
        this.storage = new Storage(this.client)
    }

    async createTicket(ticketData){
        try {

            const document = {
                ...ticketData,
                updatedAt: ticketData.updatedAt ? ticketData.updatedAt : [],
                workDone: ticketData.workDone ? ticketData.workDone : [],
                tags: ticketData.tags ? ticketData.tags : ""
            };
    
            console.log("Creating ticket with document:", JSON.stringify(document, null, 2));

            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteTicketsCollectionId,
                document.ticketId,
                document
                
            )
            
        } catch (error) {

            console.log("Error creating ticket :: Config File ::", error);
            console.log("Error details:", error.message, error.code, error.response);
            throw error;
        }
    }

    async updateTicket(ticketId, data) {
        try {
            const document = {
                ...data,
                updatedAt: data.updatedAt ? data.updatedAt : [],
                workDone: data.workDone ? data.workDone : [],
                tags: data.tags ? data.tags : ""
            };
    
            console.log("Updating ticket with document:", JSON.stringify(document, null, 2));
    
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteTicketsCollectionId,
                ticketId,
                document
            );
        } catch (error) {
            console.log("Error in UpdateTicket :: Config.js :: ERROR", error);
            console.log("Error details:", error.message, error.code, error.response);
            throw error;
        }
    }

    async getTicket(ticketId){
        try {
           return await this.databases.getDocument(
            conf.appwriteDatabaseId,
            conf.appwriteTicketsCollectionId,
            ticketId
           ) 
        } catch (error) {
            console.log('Error getting Ticket:: getTicket() :: config.js ', error);
            return false
        }
    }

    async getAllTickets(queries = [
        Query.limit(25)
    ]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteTicketsCollectionId,
                queries
            );
            
        } catch (error) {
            console.log("Error fetching tickets :: getAllTicket() :: config.js ", error);
        }
    }

    async getOpenTickets(queries = [Query.equal("status",["Open"])]) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteTicketsCollectionId,
                queries,
            )
        } catch (error) {
            console.log("Error fetching open tickets :: getOpenTickets() :: config.js",error)
            return false;
        }
    }

     // file upload service

     async uploadFile(file) {
        try {
            if (!(file instanceof File)) {
                throw new Error("Parameter 'file' has to be a File.");
            }

            return await this.storage.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            );
        } catch (error) {
            console.log("Error uploading file :: uploadFile() :: config.js ", error);
        }
    }

    async deleteFile(fileID) {
        try {
            await this.storage.deleteFile(
                conf.appwriteBucketId,
                fileID
            )
        } catch (error) {
            console.log("Error deleting file :: deleteFile () :: config.js",error)
        }
    }

    async updateFile(fileID) {
        try {
            await this.storage.updateFile(
                conf.appwriteBucketId,
                fileID
            )
        } catch (error) {
            console.log("Error in updating file :: updateFile() :: config.js", error)
        }
    }

    async getPreviewFile(fileID) {
        try {
            const response = await this.storage.getFilePreview(conf.appwriteBucketId, fileID);
            return response.href;
        } catch (error) {
            console.log("Error getting the preview :: getPreviewFile() :: config.js", error)
        }
    }

}

const service = new Services()
export default service