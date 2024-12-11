import { Button } from "@/components/ui/button"
import { IconKeyboard } from "@tabler/icons-react"
import { useState } from "react"
import { KeyboardShortcuts } from "./keyboard-shortcuts"

export function ChatInfoButton() {
  const [isKeyboardShortcutsOpen, setIsKeyboardShortcutsOpen] = useState(false)

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="hover:bg-accent/50"
        onClick={() => setIsKeyboardShortcutsOpen(true)}
        title="Keyboard shortcuts"
      >
        <IconKeyboard className="size-5" />
      </Button>

      <KeyboardShortcuts
        isOpen={isKeyboardShortcutsOpen}
        onClose={() => setIsKeyboardShortcutsOpen(false)}
      />
    </>
  )
}