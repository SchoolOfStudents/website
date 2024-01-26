export function load({ params }) {
    console.log(params);

    // TODO: fetch the data from the API
    // TODO: return NOT_FOUND if the data doesn't exist or user doesn't have access

    return {
        course_id: params.course_id,
        title: 'Hello world!',
        content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
    };
}