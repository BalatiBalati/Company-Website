import {defineField, defineType} from 'sanity'

export const workExperience = defineType({

    name:'workExperience',
    title:'Work Experience',
    type: 'document',
    fields:[

        defineField({
            name: "name",
            title: "Name",
            type: "string",
        }),

        defineField({
            name: "company",
            title: "Company",
            type: "string",
        }),

        defineField({
            name: "description",
            title: "Description",
            type: "string",
        }),
    ],
});