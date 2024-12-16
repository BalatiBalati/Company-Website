import {defineField, defineType} from 'sanity'

export const contacts = defineType({

    name:'contacts',
    title:'Contact',
    type: 'document',
    fields:[

        defineField({
            name:'name',
            title:'Name',
            type:'string',
        }),

        
        defineField({
            name:'email',
            title:'Email',
            type:'string',
        }),

        defineField({
            name:'message',
            title:'Message',
            type:'text',
        }),
    ],
})