'use client'

import { useState } from 'react'
import Image from 'next/image'
import { PlayCircle, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '~/components/ui/button'
import type { VideoComponent } from '../types/types'

interface VideoPlayerProps {
  video: VideoComponent
}

export function VideoPlayer({ video }: VideoPlayerProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Thumbnail Card */}
      <div className="relative rounded-lg overflow-hidden aspect-video w-full h-full group">
        <Image
          src={video.imageUrl}
          alt={video.imageAlt}
          fill
          className="object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <Button
            variant="ghost"
            size="icon"
            className="w-20 h-20 bg-white/30 hover:bg-white/50 backdrop-blur-sm rounded-full cursor-pointer duration-300 ease-in-out transition-all"
            onClick={() => setIsOpen(true)}
            aria-label={`Play video: ${video.title ?? video.imageAlt}`}
          >
            <PlayCircle className="w-12 h-12 text-white" />
          </Button>
        </div>
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Video Modal */}
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <div className="relative w-full max-w-4xl bg-black rounded-xl overflow-hidden shadow-2xl">
                {/* Close Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-3 right-3 z-10 bg-white/20 hover:bg-white/40 rounded-full"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="w-5 h-5 text-white cursor-pointer duration-300 ease-in-out transition-all" />
                </Button>

                <video
                  src={video.videoUrl}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-auto rounded-lg"
                  poster={video.imageUrl}
                >
                  {video.captionUrl && (
                    <track
                      src={video.captionUrl}
                      kind="subtitles"
                      srcLang="en"
                      label="English"
                    />
                  )}
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
