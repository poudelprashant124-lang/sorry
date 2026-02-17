
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateLoveLetter = async (
  name: string,
  reasonForApology: string,
  favoriteQuality: string
) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Write a deeply sincere, sweet, and romantic love letter/apology to ${name}. 
      The person writing it is sorry because: ${reasonForApology}. 
      One thing they love most about ${name} is: ${favoriteQuality}. 
      Keep the tone warm, poetic, and slightly vulnerable. Mention that they are the most important person in the world. 
      Use romantic metaphors but keep it modern.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            letter: {
              type: Type.STRING,
              description: 'The romantic letter text.'
            }
          },
          required: ['letter']
        }
      }
    });

    const result = JSON.parse(response.text || '{"letter": "Error generating letter"}');
    return result.letter;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "My love, words fail me right now, but my heart doesn't. I am so incredibly sorry for my mistakes. Please know that you are my entire world, and I'll do anything to see you smile again.";
  }
};
