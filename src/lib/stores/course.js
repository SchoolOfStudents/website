/* 

*/
import { writable } from 'svelte/store';

const createCourseState = () => {
    const { subscribe, set } = writable({
        username: null,
        email: null,
        avatar: null
    });


    return {}
}

export const course = createAuthState();