import conf from "../conf/conf";
import { Client, Databases, Query, Storage, ID } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteEndpointURL)
            .setProject(conf.appwriteProjectId)
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteCollectionId,
                conf.appwriteDatebaseId,
                slug
            )
        } catch (error) {
            console.log("E:: Appwrite service :: getPost() :: ", error);
            return false
        }
    }

    async getPosts(queries = [ Query.equal('status', 'active') ]) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatebaseId,
                conf.appwriteCollectionId,
                queries
            )
        } catch (error) {
            console.log("E:: Appwrite service :: getPosts() :: ", error);
            return false;
        }
    }

    async createPost({slug, title, content, featuredImage, status, userId}) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatebaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title, 
                    content, 
                    featuredImage, 
                    status, 
                    userId
                }
            )
        } catch (error) {
            console.log("E:: Appwrite service :: createPost() :: ", error);
            return false;
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatebaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title, content, featuredImage, status
                }
            )
        } catch (error) {
            console.log("E:: Appwrite service :: updatePost() :: ", error);
            return false;
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatebaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            console.log("E:: Appwrite service :: daletePost() :: ", error);
            return false;
        }
    }

    // Storage service
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("E:: Appwrite storage service :: uploadFile() :: ", error);
            return false;
        }
    }

    async deleteFile(fileId) {
        try {
            return await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
        } catch (error) {
            console.log("E:: Appwrite storage service :: deleteFile() :: ", error);
            return false;
        }
    }

    getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        ).href
    }
}

const service = new Service()

export default service