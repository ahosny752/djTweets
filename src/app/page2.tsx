"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Download } from "lucide-react";
import html2canvas from "html2canvas";

export default function DJTweets() {
  const [tweetText, setTweetText] = useState(
    "I love djt I love djt I love djt I love djt I love djt I love djt I love djt I love djt I love djt I love djt I love djt I love djt I love djt I love djt I love djt I love djt I love djt I love djt I love djt I love djt I love djt I love djt I love djt I love djt I love djt I love djt I love djt I love djt I love djt I love djt"
  );

  const tweetRef = useRef<HTMLDivElement>(null);

  const exportAsJpeg = async () => {
    if (tweetRef.current) {
      try {
        const canvas = await html2canvas(tweetRef.current, {
          backgroundColor: "#ffffff", // use white instead of 'null'
        });

        const link = document.createElement("a");
        link.download = "djtweet.jpeg";
        link.href = canvas.toDataURL("image/jpeg", 1.0);
        link.click();
      } catch (err) {
        console.error("Error exporting tweet as JPEG", err);
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">DJTweets</h1>
        <p className="text-gray-500">Overlay text on tweet images and export</p>
      </header>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="tweet-text">Tweet Text</Label>
            <Textarea
              id="tweet-text"
              placeholder="Type your tweet text here..."
              value={tweetText}
              onChange={(e) => setTweetText(e.target.value)}
              className="min-h-[100px]"
            />
          </div>

          <Button onClick={exportAsJpeg} className="w-full">
            <Download className="mr-2 h-4 w-4" />
            Export as JPEG
          </Button>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-medium">Preview</h2>

          {/* Exported area */}
          <div
            ref={tweetRef}
            className="w-[608px] bg-white border rounded-lg overflow-hidden"
          >
            {/* Top image */}
            <div className="w-full">
              <img src="/images/djtTop.png" alt="Top" className="w-full" />
            </div>

            {/* Tweet text (dynamic height) */}
            <div className="px-4 py-6 text-black text-xl font-bold break-words text-center">
              {tweetText || "Your tweet text will appear here"}
            </div>

            {/* Bottom image */}
            <div className="w-full">
              <img
                src="/images/djtBottom.png"
                alt="Bottom"
                className="w-full"
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
