import { combineImageAndText } from "@/app/text-to-meme/lib/combineImageAndText";
import { constructSystemPrompt } from "@/app/text-to-meme/lib/constructSystemPrompt";
import { fetchMemes } from "@/app/text-to-meme/lib/fetchMemes";
import { getPromptCompletion } from "@/app/text-to-meme/lib/openai";

const generateMeme = async (prompt: string, userId: string) => {
  const engineId = process.env.ENGINE_ID;
  const apiHost = process.env.API_HOST;
  const stabilityKey = process.env.STABILITY_API_KEY;
  const systemPrompt = constructSystemPrompt(prompt);

  let content: string;

  try {
    content = await getPromptCompletion(systemPrompt);
  } catch (error) {
    console.error("Error occurred while creating chat completion:", error);

    throw new Error("Error occured while creating meme caption");
  }

  const response = await fetchMemes({
    apiHost,
    content,
    engineId,
    stabilityKey,
  });

  if (!response.data || !response.data?.artifacts?.length) {
    console.error("Error occurred while generating the image:", response);

    throw new Error(`Error occurred while generating the meme image`);
  }

  const imageResult = response.data;

  if (!imageResult?.artifacts || !imageResult?.artifacts[0]) {
    throw new Error("Error occurred while generating the image");
  }

  const image = imageResult?.artifacts[0];
  const img = Buffer.from(image.base64, "base64");

  const meme = await combineImageAndText(img, content);

  return {
    img,
    meme,
    content,
  };
};

export { generateMeme };
