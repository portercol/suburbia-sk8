import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { JSX } from "react";

import { Bounded } from '../../components/Bounded';
import { LazyYouTubePlayer } from "./LazyYouTubePlayer";
/**
 * Props for `VideoBlock`.
 */
export type VideoBlockProps = SliceComponentProps<Content.VideoBlockSlice>;

/**
 * Component for "VideoBlock" Slices.
 */
const VideoBlock = ({ slice }: VideoBlockProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-texture bg-zinc-900"
    >
      <h2 className="sr-only">Video Reel</h2>
      <div className="relative aspect-video">
        {/* Masks */}
        {/* Video */}
        <LazyYouTubePlayer youTubeID={slice.primary.youtube_video_id} />
        {/* Texture Overlay */}
      </div>
    </Bounded>
  );
};

export default VideoBlock;
