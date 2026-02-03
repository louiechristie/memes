import { Meme } from "../memes";
import Blockquote from "./blockQuote";

interface BoxProps {
  caption?: Meme["caption"];
  cite?: Meme["cite"];
}

const Box = (props: BoxProps): JSX.Element => {
  const { caption, cite } = props;
  return caption ? (
    <figcaption className="meme-fig-caption">
      <Blockquote caption={caption}></Blockquote>
      {cite && <cite> - {cite} </cite>}
    </figcaption>
  ) : (
    <></>
  );
};

export default Box;
