import { supabase } from "@/utils/db";

const uploadImage = async (userId: string, combinedImageBuffer: any) => {
  const filename = `${userId}-${Date.now()}.png`;
  const fileBody = Buffer.from(combinedImageBuffer);
  const { data, error } = await supabase.storage
    .from("memes")
    .upload(filename, fileBody, {
      cacheControl: "3600",
      contentType: "image/png",
      upsert: false,
    });

  console.log(data, error);

  return {
    data,
    error,
  };
};

export { uploadImage };
