
//import './App.css';
import { Client, Databases} from 'appwrite';

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('669a5fe800279787b59e'); // Replace with your project ID
    
export const databases = new Databases(client);
