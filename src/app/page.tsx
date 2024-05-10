"use client";

import TranscriptionComponent from "./components/TranscriptionComponent";
import Controllers from "./components/Controllers";
import { transcriptions } from "./resources/transcriptions";
import { useState, useRef } from "react";
import Link from "next/link";

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [volume, setVolume] = useState<number>(0.5);

  //Indica si el audio se esta reproduciendo.
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  //Tiempo de reproducción.
  const [time, setTime] = useState<number>(0);

  //Pausa o reproduce el audio.
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  //Se pausa el audio y se reinicia el tiempo.
  const stopAndBack = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
      setIsPlaying(false);
      setTime(0);
    }
  };

  //Maneja el cambio de volumen.
  const changeVolume = (vol: number) => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = vol;
      setVolume(vol);
    }
  };

  //Le da un formato correcto a los minutos y segundos para luego renderizarlos.
  const renderTime = (t: number): string => {
    const minutes = t >= 60 ? Math.floor(t / 60) : 0;
    const seconds = t >= 60 ? Math.floor(t - minutes * 60) : Math.round(t);

    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-between bg-gradient-radial from-[#151d27] to-[#040914] selection:bg-[#292f3a]  text-gray-200 pb-6">
      <div className="w-[90%] max-w-[600px] flex flex-col px-4 mt-14">
        <TranscriptionComponent
          transcriptions={transcriptions}
          time={time}
          audioRef={audioRef}
          setTime={setTime}
        />
        <audio
          src="test-call.wav"
          controls
          ref={audioRef}
          onEnded={stopAndBack}
          onTimeUpdate={() => {
            setTime(
              audioRef.current?.currentTime ? audioRef.current?.currentTime : 0
            );
          }}
          className="w-full audio-player hidden"
        />
        <Controllers
          volume={volume}
          setVolume={changeVolume}
          stopAndBack={stopAndBack}
          togglePlay={togglePlay}
          isPlaying={isPlaying}
        />
        <div className="flex justify-center mt-4 w-full">
          <span className="text-sm opacity-60">
            {renderTime(time)}
            {` - `}
            {renderTime(transcriptions[transcriptions.length - 1].end)}
          </span>
        </div>
        <div className="w-full flex justify-end mt-6">
          <Link
            target="_blank"
            className="border-b opacity-60 leading-[22px] hover:border-[#7c94b3] hover:text-[#7c94b3] transition"
            href="https://github.com/BrunoM889/prueba"
          >
            Source
          </Link>
        </div>
      </div>
    </main>
  );
}
