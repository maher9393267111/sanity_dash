import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const homebanner = defineType({
  name: "Homebanner",
  type: "document",
  title: "Hemebanner",
  fields: [
    defineField({
      name: "heading",
      type: "string",
    }),

    defineField({
        name: "title",
        type: "string",
      }),

      defineField({
        name: "desc",
        type: "string",
      }),



    defineField({
      name: "slug",
      type: "string",
    }),
 
	defineField({
        name: "video",
        title: "Video",
        type: "file",
        options: {
            accept: "video/*",
        },
    }),




    defineField({
      name: "image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
        }),
      ],
    }),
  ],
  icon: DocumentTextIcon,
  preview: {
    select: {
      title: "heading",
      image: "image",
    },
    prepare({ title, image }) {
      return {
        title: title || "Untitled",
        subtitle: "Homebanner",
        media: image || DocumentTextIcon,
      };
    },
  },
});