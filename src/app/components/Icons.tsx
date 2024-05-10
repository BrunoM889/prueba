export function PlayIcon({ changePlay }: { changePlay: () => void }) {
  return (
    <svg
      onClick={changePlay}
      viewBox="0 0 1024 1024"
      fill="currentColor"
      height="40px"
      width="40px"
      className="cursor-pointer hover:opacity-70 transition-opacity active:scale-95 mr-1"
    >
      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm144.1 454.9L437.7 677.8a8.02 8.02 0 01-12.7-6.5V353.7a8 8 0 0112.7-6.5L656.1 506a7.9 7.9 0 010 12.9z" />
    </svg>
  );
}

export function PauseIcon({ changePlay }: { changePlay: () => void }) {
  return (
    <svg
      onClick={changePlay}
      viewBox="0 0 1024 1024"
      fill="currentColor"
      height="40px"
      width="40px"
      className="cursor-pointer mr-1 hover:opacity-70 transition-opacity active:scale-95"
    >
      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-80 600c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V360c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v304zm224 0c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V360c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v304z" />
    </svg>
  );
}

export function SoundIcon({ toggleMute }: { toggleMute: () => void }) {
  return (
    <svg
      onClick={toggleMute}
      viewBox="0 0 1024 1024"
      fill="currentColor"
      height="20px"
      width="20px"
      className="cursor-pointer transition-opacity active:scale-95"
    >
      <path d="M892.1 737.8l-110.3-63.7a15.9 15.9 0 00-21.7 5.9l-19.9 34.5c-4.4 7.6-1.8 17.4 5.8 21.8L856.3 800a15.9 15.9 0 0021.7-5.9l19.9-34.5c4.4-7.6 1.7-17.4-5.8-21.8zM760 344a15.9 15.9 0 0021.7 5.9L892 286.2c7.6-4.4 10.2-14.2 5.8-21.8L878 230a15.9 15.9 0 00-21.7-5.9L746 287.8a15.99 15.99 0 00-5.8 21.8L760 344zm174 132H806c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16zM625.9 115c-5.9 0-11.9 1.6-17.4 5.3L254 352H90c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h164l354.5 231.7c5.5 3.6 11.6 5.3 17.4 5.3 16.7 0 32.1-13.3 32.1-32.1V147.1c0-18.8-15.4-32.1-32.1-32.1z" />
    </svg>
  );
}

export function SoundMuteIcon({ toggleMute }: { toggleMute: () => void }) {
  return (
    <svg
      onClick={toggleMute}
      fill="currentColor"
      viewBox="0 0 16 16"
      height="20px"
      width="20px"
      className="cursor-pointer transition-opacity active:scale-95"
    >
      <path d="M6.717 3.55A.5.5 0 017 4v8a.5.5 0 01-.812.39L3.825 10.5H1.5A.5.5 0 011 10V6a.5.5 0 01.5-.5h2.325l2.363-1.89a.5.5 0 01.529-.06zm7.137 2.096a.5.5 0 010 .708L12.207 8l1.647 1.646a.5.5 0 01-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 01-.708-.708L10.793 8 9.146 6.354a.5.5 0 11.708-.708L11.5 7.293l1.646-1.647a.5.5 0 01.708 0z" />
    </svg>
  );
}

export function StopIcon({ stopAndBack }: { stopAndBack: () => void }) {
  return (
    <svg
      onClick={stopAndBack}
      viewBox="0 0 512 512"
      fill="currentColor"
      height="40px"
      width="40px"
      className="cursor-pointer hover:opacity-70 transition-opacity active:scale-95"
    >
      <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm80 288H176V176h160z" />
    </svg>
  );
}
