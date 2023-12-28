const ModularPage = {
  name: "modularPage",
  title: "Modular Pages",
  type: "object",
  fields: [
    {
      name: "pageBuilder",
      type: "array",
      title: "Page builder",
      of: [
        {
          name: "hero",
          type: "hero",
        },
        {
          name: "textIllustration",
          type: "textIllustration",
        },
      ],
    },
  ],
};

export default ModularPage;
