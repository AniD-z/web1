import Image from "next/image"
import { Download } from "lucide-react"
import { downloadPdf } from "../actions"

interface ProductCardProps {
  id: string
  title: string
  image: string
  pdfUrl: string
}

export default function ProductCard({ id, title, image, pdfUrl }: ProductCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md transition-shadow hover:shadow-lg">
      <div className="relative h-64">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <form action={downloadPdf}>
          <input type="hidden" name="pdfUrl" value={pdfUrl} />
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          >
            <Download className="h-5 w-5 mr-2" />
            Download PDF
          </button>
        </form>
      </div>
    </div>
  )
}

