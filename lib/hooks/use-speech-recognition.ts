import { useState, useEffect, useCallback, useRef } from 'react'

interface UseSpeechRecognitionProps {
  onResult?: (transcript: string) => void
  continuous?: boolean
  interimResults?: boolean
}

export const useSpeechRecognition = ({
  onResult,
  continuous = true,
  interimResults = true
}: UseSpeechRecognitionProps = {}) => {
  const [isListening, setIsListening] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const recognitionRef = useRef<SpeechRecognition | null>(null)

  useEffect(() => {
    if (typeof window !== 'undefined' && ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
      recognitionRef.current = new SpeechRecognition()
      recognitionRef.current.continuous = continuous
      recognitionRef.current.interimResults = interimResults

      recognitionRef.current.onresult = (event) => {
        const transcript = Array.from(event.results)
          .map(result => result[0])
          .map(result => result.transcript)
          .join('')
        
        onResult?.(transcript)
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
  }, [continuous, interimResults, onResult])

  const startListening = useCallback(() => {
    if (!recognitionRef.current) {
      setError('Speech recognition is not supported in this browser.')
      return
    }

    recognitionRef.current.start()
    setIsListening(true)
    setError(null)
  }, [])

  const stopListening = useCallback(() => {
    if (recognitionRef.current) {
      recognitionRef.current.stop()
      setIsListening(false)
    }
  }, [])

  const toggleListening = useCallback(() => {
    if (isListening) {
      stopListening()
    } else {
      startListening()
    }
  }, [isListening, startListening, stopListening])

  return {
    isListening,
    error,
    startListening,
    stopListening,
    toggleListening
  }
}