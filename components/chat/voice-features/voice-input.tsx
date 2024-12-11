import { useState, useEffect, useRef } from 'react'
import useHotkey from "@/lib/hooks/use-hotkey"
import { Button } from "@/components/ui/button"
import { MicIcon, StopCircleIcon } from "lucide-react"

interface VoiceInputProps {
  onTranscript: (text: string) => void
  isListening?: boolean
}

export const VoiceInput = ({ onTranscript, isListening: externalIsListening }: VoiceInputProps) => {
  useHotkey("v", () => toggleListening())
  const [isListening, setIsListening] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const recognitionRef = useRef<SpeechRecognition | null>(null)

  useEffect(() => {
    if (typeof window !== 'undefined' && 'SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
      recognitionRef.current = new SpeechRecognition()
      recognitionRef.current.continuous = true
      recognitionRef.current.interimResults = true

      recognitionRef.current.onresult = (event) => {
        const transcript = Array.from(event.results)
          .map(result => result[0])
          .map(result => result.transcript)
          .join('')
        
        onTranscript(transcript)
      }

      recognitionRef.current.onerror = (event) => {
        setError(event.error)
        setIsListening(false)
      }
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop()
      }
    }
  }, [onTranscript])

  const toggleListening = () => {
    if (!recognitionRef.current) {
      setError('Speech recognition is not supported in this browser.')
      return
    }

    if (isListening) {
      recognitionRef.current.stop()
      setIsListening(false)
    } else {
      recognitionRef.current.start()
      setIsListening(true)
      setError(null)
    }
  }

  useEffect(() => {
    if (externalIsListening !== undefined) {
      setIsListening(externalIsListening)
    }
  }, [externalIsListening])

  return (
    <div className="relative">
      <Button
        onClick={toggleListening}
        variant="ghost"
        size="icon"
        className={`hover:bg-accent/50 ${isListening ? 'text-red-500' : ''}`}
        title={isListening ? 'Stop recording' : 'Start voice input'}
      >
        {isListening ? <StopCircleIcon className="size-5" /> : <MicIcon className="size-5" />}
      </Button>
      {error && <div className="absolute bottom-full mb-2 rounded-md bg-red-100 px-2 py-1 text-sm text-red-600">{error}</div>}
    </div>
  )
}