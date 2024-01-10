import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'

const SocialMediaLink = {
  name: "socialMediaLink",
  title: "Social Media Links",
  type: "document",
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({ type: "socialMediaLink"}),
    {
      name: "name",
      title: "Name",
      type: "string",
      options: {
        list: [
            {title: 'LinkedIn', value: 'linkedin'},
            {title: 'GitHub', value: 'github'},
            {title: 'Twitter', value: 'twitter'},
            {title: 'X', value: 'x-twitter'},
            {title: 'Instagram', value: 'instagram'},
            {title: 'Facebook', value: 'facebook'},
            {title: 'YouTube', value: 'youtube'},
            {title: 'Twitch', value: 'twitch'},
            {title: 'Reddit', value: 'reddit'},
            {title: 'Snapchat', value: 'snapchat'},
            {title: 'SoundCloud', value: 'soundcloud'},
            {title: 'Spotify', value: 'spotify'},
            {title: 'TikTok', value: 'tiktok'},
        ]
      }
    },
    {
      name: "url",
      title: "URL",
      type: "url",
    },
  ],
};
export default SocialMediaLink;
