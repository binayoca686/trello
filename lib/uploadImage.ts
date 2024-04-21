import { storage, ID } from "@/appwrite";

const uploadImage = async (file: File) => {
  if (!file) return;
  const fileUploaded = await storage.createFile(
    "6548c522453c3b8e9b32",
    ID.unique(),
    file
  );
  return fileUploaded;
};
export default uploadImage;
