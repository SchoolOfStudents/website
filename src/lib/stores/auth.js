// import { account } from './appwrite';
import { writable } from 'svelte/store';
import { account } from '$stores/appwrite';

const createAuthState = () => {
    const { subscribe, set } = writable({
        username: null,
        email: null,
    });

    return {
        subscribe,
        update: async () => {
            try {
                const user = await account.get();
                console.log(user);
                set({ username: user.name, email: user.email });
            }
            catch (error) {
                console.log('Not logged in');
            }

        },
        user: async () => {
            return await account.get();
        },
        setUsername: async (username) => {
            set({ username: username, email: null });
        },
        logout: async () => {
            try {
                await account.deleteSession('current');
                set({ username: null, email: null });
            } catch (error) {
                console.log(error);
            }
        },

        /* All the login methods */
        loginWithGitHub: () => {
            try {
                account.createOAuth2Session('github', window.location.href, window.location.href);
            } catch (error) {
                console.log(error);
            }
        }
    };
};


export const auth = createAuthState();


//export const auth = writable(null);


/*
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
*/