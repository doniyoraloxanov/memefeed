import { GenerationResponse } from "@/types/generationResponse";
import { FetchMemesProps } from "@/utils/constant";
import axios from "axios";

const fetchMemes = async ({
  apiHost,
  engineId,
  stabilityKey,
  content,
}: FetchMemesProps) => {
  const response = await axios.post<GenerationResponse>(
    `${apiHost}/v1/generation/${engineId}/text-to-image`,
    JSON.stringify({
      text_prompts: [
        {
          text: `${content}`,
        },
      ],
      cfg_scale: process.env.NODE_ENV === "production" ? 7 : 7,
      height: 1024,
      width: 1024,
      steps: 30,
      samples: 1,
    }),
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${stabilityKey}`,
      },
    }
  );

  return response;
};

export { fetchMemes };
