const conf = {

    appwriteUrl : String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteUsersCollectionId : String(import.meta.env.VITE_APPWRITE_USERS_COLLECTION_ID),
    appwriteTicketsCollectionId : String(import.meta.env.VITE_APPWRITE_TICKETS_COLLECTION_ID),
    appwriteBucketId : String(import.meta.env.VITE_APPWRITE_BUCKET_ID),

}

export default conf