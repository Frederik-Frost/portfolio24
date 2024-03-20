const FlexSection = {
  name: 'textWithProfileCard',
  title: 'Text with profile card',
  type: 'object',
  fields: [
    {
      name: 'textContent',
      title: 'Text content',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
        },
      ],
    },
    {
      name: 'profileCard',
      title: 'Profile Card',
      type: 'profileCard',
    },
  ],
};

export default FlexSection;
