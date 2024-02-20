/* 

*/
import { writable } from 'svelte/store';
import { account } from '$stores/appwrite';

const createAuthState = () => {
    const { subscribe, set } = writable({
        username: null,
        email: null,
        avatar: null
    });

    return {
        subscribe,
        update: async () => {
            try {
                const user = await account.get();

                const { providerAccessToken } = await account.getSession('current');

                const response = await fetch('https://www.googleapis.com/oauth2/v1/userinfo', {
                    headers: {
                        Authorization: `Bearer ${providerAccessToken}`,
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    set({ username: user.name, email: user.email, avatar: data.picture });
                } else {
                    console.error(`Failed to fetch data. Status code: ${response.status}`);
                }
            } catch (error) {
                console.error('Error:', error);
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
        loginWithGoogle: () => {
            try {
                // account.createOAuth2Session('github');
                account.createOAuth2Session('google', window.location.href, window.location.href);
            } catch (error) {
                console.log(error);
            }
        }
    };
};


export const auth = createAuthState();