import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { IconUsers } from "@tabler/icons-react"
import { FC } from "react"

interface ChatCollaborationProps {
  activeUsers: {
    id: string
    name: string
    status: "active" | "idle" | "offline"
  }[]
}

export const ChatCollaboration: FC<ChatCollaborationProps> = ({ activeUsers }) => {
  const onlineUsers = activeUsers.filter(user => user.status !== "offline")

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <div className="flex items-center gap-2">
            <IconUsers className="size-4" />
            <Badge variant="secondary" className="rounded-full px-2">
              {onlineUsers.length}
            </Badge>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <div className="space-y-2 p-2">
            <div className="text-xs font-semibold">Active Users</div>
            <div className="space-y-1">
              {activeUsers.map(user => (
                <div key={user.id} className="flex items-center gap-2">
                  <div
                    className={cn("size-2 rounded-full", {
                      "bg-green-500": user.status === "active",
                      "bg-yellow-500": user.status === "idle",
                      "bg-gray-500": user.status === "offline"
                    })}
                  />
                  <span className="text-xs">{user.name}</span>
                </div>
              ))}
            </div>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}