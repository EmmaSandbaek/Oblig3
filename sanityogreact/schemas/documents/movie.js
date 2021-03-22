const movie = {
    title: 'Movie',
    name: 'movie',
    type: 'document',
    fields: [
        {
            name: 'title', 
            type: 'string',
            title: 'Tittel',
            description: 'Dette er tittelen'
        },
        {
            name: 'actor', 
            type: 'reference',
            title: 'Actor',
            to: [{type: 'actor'}],
            description: 'Dette er en skuespiller',
        }
    ]

}

export default movie;