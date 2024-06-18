import { overlayTextOnImage } from "@/app/text-to-meme/lib/overlayTextOnImage";
import Jimp from "jimp";

const combineImageAndText = async (
  img: any,
  content: string,
  pos?: "up" | "down"
) => {
  const combinedImage = await overlayTextOnImage({
    img,
    content,
    overlayPos: pos,
  });

  if (combinedImage) {
    const combinedImageBuffer = await combinedImage.getBufferAsync(
      Jimp.MIME_PNG
    );
    return combinedImageBuffer;
  }

  return null;
};

export { combineImageAndText };
