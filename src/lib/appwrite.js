
//import './App.css';
import { Client, Account} from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('669a5fe800279787b59e'); // Replace with your project ID
    
export const account = new Account(client);
export { ID } from 'appwrite';
