import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const requestBody = await req.json();
    
    if (!requestBody.prompts || !Array.isArray(requestBody.prompts)) {
      return NextResponse.json(
        { error: "Prompts must be an array" },
        { status: 400 }
      );
    }
    const validatedMessages = [];
    for (const msg of requestBody.prompts) {
      if (typeof msg !== 'object' || !msg.role || !msg.content) {
        return NextResponse.json(
          { error: "Each message must have {role, content}" },
          { status: 400 }
        );
      }

      if (!['user', 'assistant', 'system'].includes(msg.role)) {
        return NextResponse.json(
          { error: "Role must be user, assistant, or system" },
          { status: 400 }
        );
      }

      validatedMessages.push({
        role: msg.role,
        content: String(msg.content) // Ensure content is string
      });
    }


    // // Prepare messages for OpenRouter
    // const openRouterMessages = prompts.map(msg => ({
    //   role: msg.role,
    //   content: msg.content
    // }));

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`, // Use environment variable
        "Content-Type": "application/json",
        "HTTP-Referer": process.env.SITE_URL || "", // From environment variables
        "X-Title": process.env.SITE_NAME || "" // From environment variables
      },
      body: JSON.stringify({
        "model": "deepseek/deepseek-r1:free",
        "messages": validatedMessages // Use the properly formatted messages
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("OpenRouter Error:", errorData);
      return NextResponse.json(
        { 
          success: false, 
          message: errorData.error?.message || "OpenRouter API error" 
        },
        { status: response.status }
      );
    }

    const data = await response.json();
    const aiMessage = {
      role: "assistant",
      content: data.choices?.[0]?.message?.content || "No response from AI",
    };

    return NextResponse.json({ 
      success: true, 
      data: aiMessage 
    });

  } catch (error) {
    console.error("Server Error:", error);
    return NextResponse.json(
      { 
        success: false, 
        message: error instanceof Error ? error.message : "Internal server error" 
      },
      { status: 500 }
    );
  }
}