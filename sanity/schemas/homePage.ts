import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Home',
  type: 'document',
  fields: [
    defineField({
      name: 'homeImage',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
})
