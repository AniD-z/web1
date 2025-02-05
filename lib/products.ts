export interface Product {
  id: string
  title: string
  image: string
  pdfUrl: string
}

export const products: Product[] = [
  {
    id: "1",
    title: "Silk Charmeuse",
    image: "/placeholder.svg?height=400&width=400",
    pdfUrl: "/pdfs/silk-charmeuse.pdf",
  },
  {
    id: "2",
    title: "Merino Wool",
    image: "/placeholder.svg?height=400&width=400",
    pdfUrl: "/pdfs/merino-wool.pdf",
  },
  {
    id: "3",
    title: "Egyptian Cotton",
    image: "/placeholder.svg?height=400&width=400",
    pdfUrl: "/pdfs/egyptian-cotton.pdf",
  },
  {
    id: "4",
    title: "Linen Blend",
    image: "/placeholder.svg?height=400&width=400",
    pdfUrl: "/pdfs/linen-blend.pdf",
  },
  {
    id: "5",
    title: "Cashmere Knit",
    image: "/placeholder.svg?height=400&width=400",
    pdfUrl: "/pdfs/cashmere-knit.pdf",
  },
  {
    id: "6",
    title: "Organic Bamboo",
    image: "/placeholder.svg?height=400&width=400",
    pdfUrl: "/pdfs/organic-bamboo.pdf",
  },
]

