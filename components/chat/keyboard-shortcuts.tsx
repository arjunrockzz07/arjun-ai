import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useEffect, useState } from "react"

interface ShortcutItem {
  key: string
  description: string
  combination: string
}

const SHORTCUTS: ShortcutItem[] = [
  { key: "new_chat", description: "Create new chat", combination: "Alt + N" },
  { key: "focus_chat", description: "Focus chat input", combination: "Alt + L" },
  { key: "send_message", description: "Send message", combination: "Enter" },
  { key: "new_line", description: "New line in message", combination: "Shift + Enter" },
  { key: "search_prompts", description: "Search prompts", combination: "Alt + /" },
  { key: "toggle_sidebar", description: "Toggle sidebar", combination: "Alt + S" },
  { key: "toggle_settings", description: "Toggle settings", combination: "Alt + ," },
  { key: "toggle_theme", description: "Toggle theme", combination: "Alt + T" },
  { key: "clear_chat", description: "Clear chat", combination: "Alt + C" },
  { key: "scroll_top", description: "Scroll to top", combination: "Alt + ↑" },
  { key: "scroll_bottom", description: "Scroll to bottom", combination: "Alt + ↓" },
  { key: "previous_chat", description: "Previous chat", combination: "Alt + ←" },
  { key: "next_chat", description: "Next chat", combination: "Alt + →" },
  { key: "copy_last", description: "Copy last message", combination: "Alt + C" },
  { key: "voice_input", description: "Toggle voice input", combination: "Alt + V" }
]

interface KeyboardShortcutsProps {
  isOpen: boolean
  onClose: () => void
}

export function KeyboardShortcuts({ isOpen, onClose }: KeyboardShortcutsProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Keyboard Shortcuts</DialogTitle>
        </DialogHeader>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Action</TableHead>
              <TableHead>Shortcut</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {SHORTCUTS.map((shortcut) => (
              <TableRow key={shortcut.key}>
                <TableCell>{shortcut.description}</TableCell>
                <TableCell>
                  <kbd className="rounded-md border border-gray-200 bg-gray-100 px-2 py-1 text-xs dark:border-gray-700 dark:bg-gray-800">
                    {shortcut.combination}
                  </kbd>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </DialogContent>
    </Dialog>
  )
}