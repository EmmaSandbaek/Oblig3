import sanityClient from '@sanity/client';

const options = {
    projectId: "kjququc3",
    dataset: "production"
};

const client = sanityClient({
    ...options,
    useCdn: process.env.NODE_ENV === 'production',
});

export default client;