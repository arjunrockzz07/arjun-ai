import { useState, useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { VolumeIcon, VolumeXIcon } from "lucide-react"

interface VoiceOutputProps {
  text: string
  autoPlay?: boolean
  onStart?: () => void
  onEnd?: () => void
}

export const VoiceOutput = ({ text, autoPlay = false, onStart, onEnd }: VoiceOutputProps) => {
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null)

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      utteranceRef.current = new SpeechSynthesisUtterance(text)
      
      utteranceRef.current.onstart = () => {
        setIsSpeaking(true)
        onStart?.()
      }

      utteranceRef.current.onend = () => {
        setIsSpeaking(false)
        onEnd?.()
      }

      utteranceRef.current.onerror = (event) => {
        setError(event.error)
        setIsSpeaking(false)
      }

      if (autoPlay) {
        window.speechSynthesis.speak(utteranceRef.current)
      }
    }

    return () => {
      if (utteranceRef.current) {
        window.speechSynthesis.cancel()
      }
    }
  }, [text, autoPlay, onStart, onEnd])

  const toggleSpeaking = () => {
    if (!utteranceRef.current) {
      setError('Speech synthesis is not supported in this browser.')
      return
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel()
      setIsSpeaking(false)
    } else {
      window.speechSynthesis.speak(utteranceRef.current)
    }
  }

  return (
    <div className="relative">
      <Button
        onClick={toggleSpeaking}
        variant="ghost"
        size="icon"
        className="hover:bg-accent/50"
        title={isSpeaking ? 'Stop speaking' : 'Read message'}
      >
        {isSpeaking ? <VolumeXIcon className="size-5" /> : <VolumeIcon className="size-5" />}
      </Button>
      {error && <div className="absolute bottom-full mb-2 rounded-md bg-red-100 px-2 py-1 text-sm text-red-600">{error}</div>}
    </div>
  )
}