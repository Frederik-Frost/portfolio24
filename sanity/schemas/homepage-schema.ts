const Homepage = {
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Page Description',
      type: 'text',
    },
    {
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
    },
    {
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'string',
    },
    {
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'textWithProfileCard',
      title: 'Text with profile card',
      type: 'textWithProfileCard'
    }
  ],
};
export default Homepage;
