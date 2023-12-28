import { StructureBuilder } from "sanity/desk";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import { DocumentTextIcon, HomeIcon, FolderIcon } from "@sanity/icons";

const hiddenDocTypes = ["homepage", "page", "project"]; // specify types to hide

export const CustomDeskStructure = (S: StructureBuilder, context: any) =>
  S.list()
    .title("Base")
    .items([
      S.listItem().title("Home").icon(HomeIcon).child(S.document().schemaType("homepage").documentId("homepage")),
      ...S.documentTypeListItems().filter((document) => !hiddenDocTypes.includes(document.getId() ?? "")),

      orderableDocumentListDeskItem({ type: "page", title: "Pages", icon: FolderIcon, S, context }),
      orderableDocumentListDeskItem({ type: "project", title: "Projects", icon: DocumentTextIcon, S, context }),
    ]);

