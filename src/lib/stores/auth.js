// import { account } from './appwrite';
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

                const response = await fetch('https://api.github.com/user', {
                    headers: {
                        Authorization: `token ${providerAccessToken}`,
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    set({ username: user.name, email: user.email, avatar: data.avatar_url });
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
        loginWithGitHub: () => {
            try {
                // account.createOAuth2Session('github');
                account.createOAuth2Session('github', window.location.href, window.location.href);
            } catch (error) {
                console.log(error);
            }
        }
    };
};


export const auth = createAuthState();