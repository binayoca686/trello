interface Board {
  columns: Map<TypeColumns, Column>;
}
type TypeColumns = "todo" | "inprogress" | "done";

interface Column {
  id: TypeColumns;
  todos: Todo[];
}

interface Todo {
  $id: string;
  $createdAt: string;
  // title: string;
  status: TypeColumns;
  image?: Image;
  $title: string;
}

interface Image {
  bucketId: string;
  fileId: string;
}
