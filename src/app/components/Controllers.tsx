"use client";
import React from "react";
import {
  PauseIcon,
  PlayIcon,
  SoundIcon,
  StopIcon,
  SoundMuteIcon,
} from "./Icons";


interface Props {
  stopAndBack: () => void;
  isPlaying: boolean;
  togglePlay: () => void;
  setVolume: (vol: number) => void;
  volume: number;
}


function Controllers({
  isPlaying,
  stopAndBack,
  togglePlay,
  setVolume,
  volume,
}: Props) {

  //Silencia o reanuda el audio.
  const toggleMute = () => {
    setVolume(volume === 0 ? 0.5 : 0);
  };

  return (
    <div className="flex w-full mt-10">
      <div className="flex grow">
        {isPlaying ? (
          <PauseIcon changePlay={togglePlay} />
        ) : (
          <PlayIcon changePlay={togglePlay} />
        )}
        <StopIcon stopAndBack={stopAndBack} />
      </div>
      <div className="flex items-center gap-4">
        {volume !== 0 ? (
          <SoundIcon toggleMute={toggleMute} />
        ) : (
          <SoundMuteIcon toggleMute={toggleMute} />
        )}

        <input
          className={`progress w-24 bg-transparent max-[320px]:w-16`}
          type="range"
          value={volume}
          min={0}
          max={1}
          step={0.1}
          onChange={(e) => {
            setVolume(Number(e.target.value));
          }}
        />
      </div>
      
    </div>
  );
}

export default Controllers;
