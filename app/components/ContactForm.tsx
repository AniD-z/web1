"use client"

import { useState } from "react"
import { Button as MUIButton } from "@mui/material"
import TextField from "@mui/material/TextField"
import TextareaAutosize from "@mui/material/TextareaAutosize"

interface ContactFormProps {
  onClose: () => void
}

export default function ContactForm({ onClose }: ContactFormProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted:", { name, email, message })
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <TextField
              label="Name"
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              required
            />
          </div>
          <div>
            <TextField
              label="Email"
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              required
            />
          </div>
          <div>
            <TextareaAutosize
              minRows={4}
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{ width: "100%", padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }}
              required
            />
          </div>
          <div className="flex justify-end space-x-2">
            <MUIButton variant="outlined" onClick={onClose}>
              Cancel
            </MUIButton>
            <MUIButton type="submit" variant="contained" color="primary">
              Submit
            </MUIButton>
          </div>
        </form>
      </div>
    </div>
  )
}


