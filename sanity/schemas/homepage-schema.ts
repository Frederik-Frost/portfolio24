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
    { name: 'hero', title: 'Hero', type: 'hero' },
    { name: 'latestProjects', title: 'Latest Projects', type: 'latestProjects' },

 
  ],
};
export default Homepage;
