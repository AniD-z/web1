"use server"

import { readFile } from "fs/promises"
import path from "path"

export async function downloadPdf(formData: FormData) {
  const pdfUrl = formData.get("pdfUrl") as string
  const filePath = path.join(process.cwd(), "public", pdfUrl)

  try {
    const fileBuffer = await readFile(filePath)
    const fileName = path.basename(pdfUrl)

    // Set appropriate headers
    const headers = new Headers()
    headers.append("Content-Disposition", `attachment; filename="${fileName}"`)
    headers.append("Content-Type", "application/pdf")

    // Return the file as a stream
    return new Response(fileBuffer, {
      headers,
    })
  } catch (error) {
    console.error("Error reading PDF file:", error)
    return new Response("PDF not found", { status: 404 })
  }
}

