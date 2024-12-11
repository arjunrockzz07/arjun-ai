import { useTheme } from "next-themes"
import { FC } from "react"
import { format } from "date-fns"

interface ChatTimestampProps {
  timestamp: Date
  format?: string
}

export const ChatTimestamp: FC<ChatTimestampProps> = ({
  timestamp,
  format: dateFormat = "HH:mm"
}) => {
  const { theme } = useTheme()

  return (
    <div
      className={cn(
        "rounded px-1.5 py-0.5 text-xs",
        theme === "dark"
          ? "bg-zinc-700/50 text-zinc-300"
          : "bg-zinc-200/50 text-zinc-600"
      )}
    >
      {format(timestamp, dateFormat)}
    </div>
  )
}