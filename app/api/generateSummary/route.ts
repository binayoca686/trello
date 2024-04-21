import openai from "@/openAI";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { todos } = await request.json();
  console.log(todos);

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: `When responding, Welcome the user always as Mr. Bayoca and say welcome to the Trello Clone App! Limit the response to 200 characters`,
      },
      {
        role: "user",
        content: `Hi there, provide a summary of the following todos. Count how many todos are in each category such as To do, in progress, and done, then tell the user a inspirational quote to inspire them to have a positive productive day! with tips Here's the data:
          ${JSON.stringify(todos)}` /* "What is the best game?" */,
      },
    ],
    temperature: 0,
    presence_penalty: 0,
    max_tokens: 1024,
    top_p: 1,
    frequency_penalty: 0,
  });

  // console.log("Data is: ", response);
  // console.log(response.choices[0].message);
  return NextResponse.json(response.choices[0].message);
  // return NextResponse.json(response);
}
