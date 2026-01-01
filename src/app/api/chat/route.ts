import Anthropic from "@anthropic-ai/sdk"
import { buildAIContext } from "@/lib/ai"

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

interface ConversationMessage {
  text: string
  sender: 'user' | 'bot'
}

export async function POST(request: Request) {
  try {
    const { message, conversationHistory } = await request.json()

    if (!message) {
      return Response.json(
        { error: "Message is required" },
        { status: 400 }
      )
    }

    // Build message array from conversation history
    const messages: Array<{ role: 'user' | 'assistant'; content: string }> = []

    if (conversationHistory && Array.isArray(conversationHistory)) {
      for (const msg of conversationHistory) {
        messages.push({
          role: msg.sender === 'user' ? 'user' : 'assistant',
          content: msg.text,
        })
      }
    }

    // Add the current user message
    messages.push({
      role: "user",
      content: message,
    })

    const response = await anthropic.beta.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 1024,
      betas: ["structured-outputs-2025-11-13"],
      system: buildAIContext(),
      messages,
      output_format: {
        type: "json_schema",
        schema: {
          type: "object",
          properties: {
            message: {
              type: "string",
              description: "The message to display to the user"
            },
            showForm: {
              type: "boolean",
              description: "Whether to show the contact form"
            },
            context: {
              type: "string",
              description: "Context summary for the form (only if showForm is true)"
            }
          },
          required: ["message", "showForm"],
          additionalProperties: false
        }
      }
    })

    const textContent = response.content.find(block => block.type === "text")
    const reply = textContent && "text" in textContent ? textContent.text : "Sorry, I couldn't generate a response."

    return Response.json({ reply })
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error)
    console.error("Chat API error:", errorMessage)
    console.error("Full error:", error)
    return Response.json(
      { error: `Failed to process chat request: ${errorMessage}` },
      { status: 500 }
    )
  }
}
