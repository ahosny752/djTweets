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

  const displayedText = tweetText;

  return (
    <div className="max-w-4xl mx-auto p-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">DJTweets</h1>
        <p className="text-gray-500">Created by Ric0</p>
      </header>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
        {/* Left side */}
        <div>
          <label htmlFor="tweet-text" className="block font-bold mb-2">
            Tweet Text
          </label>
          <textarea
            id="tweet-text"
            placeholder="Type your tweet text here..."
            value={tweetText}
            onChange={(e) => setTweetText(e.target.value)}
            className="w-full min-h-[100px] p-4 text-base border border-gray-300 rounded-lg mb-4 resize-vertical"
          />

          <button
            onClick={exportAsJpeg}
            className="w-full py-3 text-base bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
          >
            Export as JPEG
          </button>
        </div>

        {/* Right side */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Preview</h2>

          <div
            ref={tweetRef}
            className="w-full max-w-[608px] bg-white border border-gray-300 rounded-lg overflow-hidden mb-4"
          >
            {/* Top image */}
            <div className="w-full">
              <img
                src="/images/djtTop.png"
                alt="Top"
                className="w-full h-auto block"
              />
            </div>

            {/* Tweet text */}
            <div className="px-6 py-[12px] text-black text-xl text-left break-words whitespace-pre-wrap font-sans">
              {displayedText || "[YOUR BIG BEAUTIFUL TRUTH GOES HERE]"}
            </div>

            {/* Bottom image */}
            <div className="w-full">
              <img
                src="/images/djtBottom.png"
                alt="Bottom"
                className="w-full h-auto block"
              />
            </div>
          </div>

          <p className="text-sm text-gray-500">
            This is how your tweet will look when exported
          </p>
        </div>
      </div>
    </div>
  );
}
