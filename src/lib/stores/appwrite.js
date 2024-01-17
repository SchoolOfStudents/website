import { Client, Account } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('659ee2a2da7161b36a37');

export const account = new Account(client);
export { ID } from 'appwrite';
