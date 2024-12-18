import {defineField, defineType} from 'sanity'

export const skills = defineType({

    name:'skills',
    title:'Skills',
    type: 'document',
    fields:[

        defineField({
            name:'name',
            title:'Name',
            type:'string',
        }),

        defineField({
            name:'bgColor',
            title:'BgColor',
            type:'string',
        }),

        defineField({
            name:'icon',
            title:'Icon',
            type: 'image',
            options: {
              hotspot: true,
            },
        }),

        defineField({
            name: 'level',
            title: 'Proficiency Level (%)',
            type: 'number',
            validation: (Rule) => Rule.min(0).max(100),
        })
    ],
})