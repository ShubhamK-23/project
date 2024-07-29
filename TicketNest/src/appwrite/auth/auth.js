import { Client, ID } from "appwrite"
import  {Account}  from "appwrite";
import conf from '../../conf'

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client.setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client)
    }


    async createAccount({email, password , name}){
        try 
        {
            console.log(email, password, name)
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if (userAccount) {
                return this.login ({email, password})
            }
        } catch (error) {
            console.log('Error creating the user:: createAccount ', error)
            
        }
    }

    async login({email, password}) {
        try {
            return await this.account.createEmailPasswordSession(email, password)
            
        } catch (error) {
            console.log("User not found or wrong credentials :: login", error)
            
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get()
            
        } catch (error) {
            console.log("AuthService :: getCurrentUser :: error", error)
        }
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("AuthService :: logout :: Error", error)
            
        }
    }

}

const authService = new AuthService();

export default authService

