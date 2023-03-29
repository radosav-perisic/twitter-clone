import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'tweet',
  title: 'Tweet',
  type: 'document',
  fields: [
    defineField({
      name: 'text',
      title: 'Text in Tweet',
      type: 'string',
    }),
    defineField({
      name: 'blockTweet',
      type: 'boolean',
      description:'ADMIN controls: Toggle if Tweet is deemed inappropriate',
      title: 'Block Tweet',
    }),
    defineField({
      name: 'username',
      title: 'Username',
      type: 'string',
    }),
    defineField({
      name: 'profileimg',
      title: 'Profile Image',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Tweet Image',
      type: 'string',
    })
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
