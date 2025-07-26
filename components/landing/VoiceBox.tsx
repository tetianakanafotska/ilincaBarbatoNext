interface VoiceProps {
  id: string;
  pic: string;
  name: string;
  text: string;
}

function VoiceBox({ pic, name, text }: VoiceProps) {
  return (
    <article className="flex flex-col h-[400px] lg:w-[30vw] max-w-screen shrink-0 items-center mb-10">
      <img
        src={pic}
        alt={`Photo of ${name}`}
        className="rounded-full w-[15rem] aspect-square bg-purple mb-10"
      />
      <blockquote className="text-center w-[70%]">{text}</blockquote>
      <p className=" pt-5">{name}</p>
    </article>
  );
}

export default VoiceBox;
