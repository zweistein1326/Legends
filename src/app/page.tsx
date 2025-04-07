"use client";
import { ElevenLabsClient, play } from "elevenlabs";
// import { GoogleGenAI } from "@google/genai";

const speakQuote = async (text: string) => {
  const client = new ElevenLabsClient({
    apiKey: "sk_a887a06b8b4061bc386fede4e6c7aaa20337b9c82a8e70ac",
  });
  const audio = await client.textToSpeech.convert("JBFqnCBsd6RMkjVDRZzb", {
    text: text.toString(),
    model_id: "eleven_multilingual_v2",
    output_format: "mp3_44100_128",
  });
  await play(audio);
};

const dummyResponse =
  "Sid, at 25, you're writing your own story. Every cigarette you resist is a powerful stroke, painting a future of strength, health, and limitless possibilities. This is your chapter. Make it a masterpiece. You got this!";

const generateQuote = async () => {
  // const ai = new GoogleGenAI({
  //   apiKey: "AIzaSyCIJNNtxSBVQoy4ouf5nnAm413iG8X3whA",
  // });
  // const response = await ai.models.generateContent({
  //   model: "gemini-2.0-flash",
  //   contents:
  //     "Generate a motivational quote for Sid, a 25yo male who wants to quit his bad habit of smoking cigarettes.",
  // });
  // if (response.text) {
  //   speakQuote(response.text);
  // }
  if (dummyResponse) {
    speakQuote(dummyResponse);
  }
};

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <button onClick={generateQuote}>Generate</button>
    </div>
  );
}
