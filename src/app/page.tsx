"use client";

import { useState, useRef } from "react";
import { toJpeg } from "html-to-image";

export default function DJTweets() {
  const [tweetText, setTweetText] = useState("");
  const tweetRef = useRef<HTMLDivElement>(null);

  const exportAsJpeg = async () => {
    if (tweetRef.current) {
      try {
        const dataUrl = await toJpeg(tweetRef.current, {
          quality: 1,
          backgroundColor: "#ffffff",
        });

        const link = document.createElement("a");
        link.download = "djtweet.jpeg";
        link.href = dataUrl;
        link.click();
      } catch (err) {
        console.error("Error exporting tweet as JPEG", err);
      }
    }
  };

  const displayedText = tweetText.toUpperCase();

  return (
    <div style={{ maxWidth: "960px", margin: "0 auto", padding: "2rem" }}>
      <header style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>DJTweets</h1>
        <p style={{ color: "#6b7280" }}>Created by Ric0</p>
      </header>

      <div
        style={{
          display: "grid",
          gap: "2rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        }}
      >
        {/* Left side */}
        <div>
          <label
            htmlFor="tweet-text"
            style={{
              display: "block",
              fontWeight: "bold",
              marginBottom: "0.5rem",
            }}
          >
            Tweet Text
          </label>
          <textarea
            id="tweet-text"
            placeholder="Type your tweet text here..."
            value={tweetText}
            onChange={(e) => setTweetText(e.target.value)}
            style={{
              width: "100%",
              minHeight: "100px",
              padding: "1rem",
              fontSize: "1rem",
              border: "1px solid #ccc",
              borderRadius: "0.5rem",
              marginBottom: "1rem",
              resize: "vertical",
            }}
          />

          <button
            onClick={exportAsJpeg}
            style={{
              width: "100%",
              padding: "0.75rem",
              fontSize: "1rem",
              backgroundColor: "#1d4ed8",
              color: "#ffffff",
              border: "none",
              borderRadius: "0.5rem",
              cursor: "pointer",
            }}
          >
            Export as JPEG
          </button>
        </div>

        {/* Right side */}
        <div>
          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: "600",
              marginBottom: "1rem",
            }}
          >
            Preview
          </h2>

          {/* Exported area */}
          <div
            ref={tweetRef}
            style={{
              width: "100%",
              maxWidth: "608px",
              backgroundColor: "#ffffff",
              border: "1px solid #ccc",
              borderRadius: "0.5rem",
              overflow: "hidden",
              marginBottom: "1rem",
            }}
          >
            {/* Top image */}
            <div style={{ width: "100%" }}>
              <img
                src="/images/djtTop.png"
                alt="Top"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>

            {/* Tweet text */}
            <div
              style={{
                padding: "1.5rem",
                color: "#000000",
                fontSize: "1.25rem",
                textAlign: "left",
                wordBreak: "break-word",
                whiteSpace: "pre-wrap",
                fontFamily: "'Inter', sans-serif",
                textTransform: "uppercase",
              }}
            >
              {displayedText || "[YOUR BIG BEAUTIFUL TRUTH GOES HERE]"}
            </div>

            {/* Bottom image */}
            <div style={{ width: "100%" }}>
              <img
                src="/images/djtBottom.png"
                alt="Bottom"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>

          <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>
            This is how your tweet will look when exported
          </p>
        </div>
      </div>
    </div>
  );
}
