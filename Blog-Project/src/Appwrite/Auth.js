import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        const userAccount = await this.account.create(
            ID.unique(),
            email,
            password,
            name
        );

        if (userAccount) {
            return this.login({ email, password });
        } else {
            return userAccount;
        }
    }

    async login({ email, password }) {
        return await this.account.createEmailPasswordSession(email, password);
    }

    async getCurrentUser() {
        try {
            return await this.account.get()
        }
        catch (error) {
            console.log("Appwrite Serive :: getCurrentUser :: error", error);
        }
        return null;
    }

    async logout() {

        try{
            await this.account.deleteSessions('all')
        }
    catch(error) {
        console.log("Appwrite Serive :: logout :: error", error)
    }
}
}

const authService = new AuthService();
export default authService;