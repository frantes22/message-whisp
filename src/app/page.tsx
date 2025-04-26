import { MessageForm } from "@/components/MessageForm"
import { Toaster } from "@/components/ui/toaster"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <h1 className="text-4xl font-bold text-center">Message Whisp</h1>
        <p className="text-center text-gray-600">
          Create and share encrypted messages that self-destruct after being read
        </p>
        <MessageForm />
      </div>
      <Toaster />
    </main>
  )
}
