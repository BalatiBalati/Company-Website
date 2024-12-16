import {defineField, defineType} from 'sanity'

export const brands = defineType({

    name:'brands',
    title:'Brands',
    type: 'document',
    fields:[

        defineField({
            name:'imgUrl',
            title:'ImgUrl',
            type: 'image',
            options: {
              hotspot: true,
            },
        }),

        
        defineField({
            name:'name',
            title:'Name',
            type:'string',
        }),
    ],
})