const ProfileCard = {
  name: 'profileCard',
  title: 'Profile Card',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'profession',
      title: 'Profession',
      type: 'string',
    },

    {
      name: 'infoList',
      title: 'Info List',
      type: 'array',
      of: [
        {
          name: 'infoItem',
          type: 'object',
          fields: [
            {
              name: 'iconReference',
              title: 'Icon Reference',
              type: 'string',
            },
            {
              name: 'infoText',
              title: 'Info Text',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
};

export default ProfileCard;
