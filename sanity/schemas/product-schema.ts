const product = {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{ type: 'image' }],
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
            name: 'price',
            title: 'Price',
            type: 'number',
        },
        {
            name: 'details',
            title: 'Details',
            type: 'string',
        },
        {
            name: 'size',
            title: 'Size',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                list: [
                    { title: 'Small', value: 'S' },
                    { title: 'Medium', value: 'M' },
                    { title: 'Large', value: 'L' },
                    { title: 'Extra Large', value: 'XL' },
                ]
            }
        },
        {
            name: 'vendor',
            title: 'Vendor',
            type: 'reference',
            to: [{ type: 'vendor' }]
        }
    ]
}

export default product;