import client from'./client';

const movieFields = `
    title,
    'actor': actor->name`
    ;

export const getMovie = async () => {
    const data = await client.fetch(`*[_type == "movie"]{${movieFields}}`);
    return data;
};