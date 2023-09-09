const vendor = {
    name: 'vendor',
    title: 'Vendor',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 100,
            }
        },
        {
            name: 'details',
            title: 'Details',
            type: 'string',
        },
        {
            name: 'product',
            title: 'Product',
            type: 'array',
            of: [{
                type: 'reference',
                to: [{ type: 'product' }]
            }]
        }
    ]
}

export default vendor;