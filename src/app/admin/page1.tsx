"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import { getCommands } from "@uiw/react-md-editor";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

export default function AdminPage() {
  const [content, setContent] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      // Simulate saving blog to DB or backend
      console.log("Submitted blog:", { title, content });
      setMessage("✅ Blog submitted successfully!");
    } catch (err) {
      setMessage("❌ Failed to submit blog.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-zinc-900 text-white rounded-xl shadow-md">
      <h1 className="text-3xl font-bold mb-6"> Write a New Blog Post</h1>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Blog Title..."
        className="w-full mb-4 px-4 py-2 rounded bg-zinc-800 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div data-color-mode="dark">
        <MDEditor
          value={content}
          onChange={(value) => setContent(value ?? "")}
          height={500}
          preview="edit"
          commands={[
            ...getCommands(),
            {
              name: "upload-image",
              keyCommand: "upload-image",
              buttonProps: { "aria-label": "Insert image" },
              icon: <span>🖼️</span>,
              execute: async ({ text, selection }, api) => {
                const fileInput = document.createElement("input");
                fileInput.type = "file";
                fileInput.accept = "image/*";

                fileInput.onchange = async () => {
                  const file = fileInput.files?.[0];
                  if (!file) return;

                  const formData = new FormData();
                  formData.append("file", file);
                  formData.append("fileName", file.name);

                  const res = await fetch("/api/upload", {
                    method: "POST",
                    body: formData,
                  });

                  const data = await res.json();
                  const url = data.url;

                  api.replaceSelection(`![${file.name}](${url})`);
                };

                fileInput.click();
              },
            },
          ]}
        />
      </div>

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="mt-6 bg-blue-600 hover:bg-blue-700 px-6 py-2 text-white font-semibold rounded shadow transition-all duration-300"
      >
        {loading ? "Submitting..." : " Submit Blog"}
      </button>

      {message && <p className="mt-4 text-sm text-green-400">{message}</p>}
    </div>
  );
}
