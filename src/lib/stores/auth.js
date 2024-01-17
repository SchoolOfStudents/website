import { account } from './appwrite';
import { writable } from 'svelte/store';


const createState = () => {
    const { subscribe, set } = writable({
        username: null,
    });

    return {
        subscribe,
        user: async () => {
            return await account.get();
        },
        login: async () => {
            await account
                .createOAuth2Session('github', 'http://localhost:5173/login', 'http://localhost:5173/login')
                .catch((error) => {
                    console.error('OAuth login failed:', error);
                });
            console.log("here")

            const user = await account.get();
            console.log(user)
            auth.init(user);
        },
        logout: async () => {
            await account.deleteSession('current');
        },
        init: async (account) => {
            const user = await account.get();
            console.log(user)
            return set({ account });
        }
    };
};


export const auth = createState();