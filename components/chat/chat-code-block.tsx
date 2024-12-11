import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { IconCheck, IconClipboard } from "@tabler/icons-react"
import { FC, memo, useState } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import {
  oneDark,
  oneLight
} from "react-syntax-highlighter/dist/cjs/styles/prism"
import { useTheme } from "next-themes"

interface CodeBlockProps {
  language: string
  value: string
  codeBlock?: boolean
}

const CodeBlock: FC<CodeBlockProps> = memo(({ language, value, codeBlock }) => {
  const { theme } = useTheme()
  const [isCopied, setIsCopied] = useState<boolean>(false)

  const copyToClipboard = () => {
    if (!navigator.clipboard || !navigator.clipboard.writeText) {
      return
    }

    navigator.clipboard.writeText(value).then(() => {
      setIsCopied(true)

      setTimeout(() => {
        setIsCopied(false)
      }, 2000)
    })
  }

  const syntaxStyle = theme === "dark" ? oneDark : oneLight

  return (
    <div className={cn("relative w-full font-sans", !codeBlock && "rounded-lg")}>
      <div className="flex w-full items-center justify-between bg-zinc-800 px-4 py-1.5">
        <span className="text-xs lowercase text-white">{language}</span>

        <Button
          variant="ghost"
          className="hover:bg-zinc-700 focus-visible:ring-1 focus-visible:ring-slate-700 focus-visible:ring-offset-0"
          onClick={copyToClipboard}
          size="sm"
        >
          <div className="text-white">
            {isCopied ? <IconCheck size={16} /> : <IconClipboard size={16} />}
          </div>
        </Button>
      </div>

      <SyntaxHighlighter
        language={language}
        style={syntaxStyle}
        showLineNumbers
        customStyle={{
          margin: 0,
          borderRadius: codeBlock ? "0" : "0 0 0.5rem 0.5rem",
          padding: "1.5rem 1rem"
        }}
        codeTagProps={{
          className: "text-sm"
        }}
      >
        {value}
      </SyntaxHighlighter>
    </div>
  )
})
CodeBlock.displayName = "CodeBlock"

export default CodeBlock