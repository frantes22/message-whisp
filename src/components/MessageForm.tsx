import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { copyToClipboard } from "@/utils/clipboard"

export function MessageForm() {
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!message.trim()) return

    setIsSubmitting(true)
    try {
      // TODO: Implement encryption and storage logic
      const encryptedMessage = message // Placeholder for encryption
      const messageId = "test-id" // Placeholder for unique ID
      const messageUrl = `${window.location.origin}/message/${messageId}`

      await copyToClipboard(messageUrl)
      toast({
        title: "Message created!",
        description: "The link has been copied to your clipboard.",
      })
      setMessage("")
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Textarea
        value={message}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
        placeholder="Enter your secret message..."
        className="min-h-[200px]"
        required
      />
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Creating..." : "Create Message"}
      </Button>
    </form>
  )
} 