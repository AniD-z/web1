"use client"

interface FrameComponentProps {
  video: string
  width: number | string
  height: number | string
  className?: string
}

export function FrameComponent({ video, width, height, className = "" }: FrameComponentProps) {
  return (
    <div
      className={`relative ${className}`}
      style={{
        width,
        height,
        transition: "width 0.3s ease-in-out, height 0.3s ease-in-out",
      }}
    >
      <div className="relative w-full h-full overflow-hidden">
        <video className="w-full h-full object-cover" src={video} loop muted playsInline autoPlay />
      </div>
    </div>
  )
}

