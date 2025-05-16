// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
  S.list()
    .title("Blog")
    .items([
      S.documentTypeListItem("project").title("Projects"),
      S.documentTypeListItem("post").title("Blog"),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !["post", "project"].includes(item.getId()),
      ),
    ]);
