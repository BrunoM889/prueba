import { Transcription } from "../resources/types";

interface Props {
  transcriptions: Transcription[];
  audioRef: React.RefObject<HTMLAudioElement>;
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
}

export default function TranscriptionComponent({
  transcriptions,
  audioRef,
  time,
  setTime,
}: Props) {
  /*
  Chequea si la transcripción se encuentra en el tiempo actual y de ser así, 
  le da un estilo distinto al resto.
  */
  const checkTime = (start: number, end: number) => {
    /*
    Le reste .2s al inicio y le sume .5s al final para que la experiencia del 
    usuario sea más fluida ya que, si no lo hacia el cambio de una transcripción 
    a otra, se veía bastante desfasado.
    */
    if (time >= start - 0.2 && time <= end + 0.5) {
      return "opacity-100 scale-105";
    } else {
      return "opacity-50";
    }
  };

  /*
  Maneja el cambio de tiempo de reproducción cuando el usuario 
  hace click sobre la transcripción a la que quiere saltar.
  */
  const handleChangeTime = (transcription: Transcription) => {
    let audio = audioRef.current;
    setTime(transcription.start);
    if (audio) {
      audio.currentTime = transcription.start;
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-col gap-2">
        {transcriptions.map((transcription, index) => (
          <div
            onClick={() => {
              handleChangeTime(transcription);
            }}
            key={index}
            className={`${checkTime(
              transcription.start,
              transcription.end
            )} py-2 w-fit cursor-pointer hover:opacity-100 transition-all h-fit mb-2`}
          >
            <h3 className={`mb-1 text-[#7c94b3] font-semibold text-sm`}>
              {transcription.role === "agent" ? "Agente" : "Usuario"}
            </h3>
            <p className={`font-light max-[370px]:text-[12px] text-sm`}>
              {transcription.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
