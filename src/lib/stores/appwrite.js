import { Client, Account } from 'appwrite';
import { PUBLIC_APPWRITE_PROJECT, PUBLIC_APPWRITE_ENDPOINT } from '$env/static/public'

export const client = new Client();

client
    .setEndpoint(PUBLIC_APPWRITE_ENDPOINT)
    .setProject(PUBLIC_APPWRITE_PROJECT);

export const account = new Account(client);
export { ID } from 'appwrite';
