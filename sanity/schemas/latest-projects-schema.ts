const LatestProjects = {
  title: 'Latest Projects',
  name: 'latestProjects',
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
          type: 'array',
          of: [{ type: 'block' }],
        },
      ],
    },
    {
      title: 'Projects',
      name: 'projects',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'project' }] }],
      validation: (Rule: any) => Rule.required().max(3).min(1),
    },
  ],
};
export default LatestProjects;
