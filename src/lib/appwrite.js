

import { Client, Databases} from 'appwrite';

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('669a5fe800279787b59e'); // Replace with your project ID


export const databases = new Databases(client);


let promise = databases.listDocuments(
    "669a6299000fb18aa727",
    "669d0ee2002f3b8f0f6d",

);

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
