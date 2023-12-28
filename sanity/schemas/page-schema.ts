import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'

const Page = {
  name: "page",
  title: "Pages",
  type: "document",
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({ type: "page" }),
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "content",
      title: "Content",
      type: "modularPage",
    },
  ],
};
export default Page;
