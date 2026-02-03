import { Meme } from "../memes";

const Blockquote = (props: { caption: Meme["caption"] }): JSX.Element => {
  const { caption } = props;
  if (typeof caption === "string") {
    return (
      <blockquote>
        <p>{caption}</p>
      </blockquote>
    );
  } else if (
    Array.isArray(caption) &&
    caption.every((item) => typeof item === "string")
  ) {
    return (
      <blockquote>
        {caption.map((captionString) => {
          return <p key={captionString}>{captionString}</p>;
        })}
      </blockquote>
    );
  } else {
    console.error("Invalid caption type");
    return <p>Invalid caption type</p>;
  }
};

export default Blockquote;
