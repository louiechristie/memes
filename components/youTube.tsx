import { Youtube } from "../memes";
import Box from "./box";
import limit from "../utilities/limit";
import Head from "./head";
import Footer from "./footer";
import AlsoSee from "./alsoSee";
import Footnotes from "./footnotes";

interface Props {
  meme: Youtube;
}

export const getVideoDescriptor = (meme: Youtube): string => {
  const { title, youtube } = meme;

  let descriptor = `${title} [2 mins video]`;

  const start = youtube.start;
  const end = youtube.end;
  const length = end - start;
  const mins = Math.round(length / 60);
  const sec = length % 60;
  let denominator;
  if (mins > 1) {
    denominator = " mins";
  } else if (mins > 0) {
    denominator = " min";
  } else {
    denominator = " sec";
  }

  descriptor = `[${mins ? mins + denominator : sec + denominator} video]`;

  return descriptor;
};

export const getLongTitle = (meme: Youtube) => {
  const { title } = meme;

  const MAX_LENGTH_OF_OPENGRAPH_TITLE = 55; // https://www.contentkingapp.com/academy/open-graph/#:~:text=Keep%20your%20og%3Atitle%20under,file%20size%20under%208%20MB%20.

  const maxLengthOfTitleWithoutDescriptor =
    MAX_LENGTH_OF_OPENGRAPH_TITLE - getVideoDescriptor(meme).length;

  return `${limit(
    title,
    maxLengthOfTitleWithoutDescriptor,
    "..."
  )} ${getVideoDescriptor(meme)}`;
};

const YouTube = (props: Props) => {
  const { meme } = props;
  const { caption, image, alt, url, cite, alsoSee, footnotes, youtube } = meme;

  return (
    <>
      <Head
        title={getLongTitle(meme)}
        description={getVideoDescriptor(meme)}
        caption={caption}
        image={image}
        alt={alt}
        url={url}
      />

      <div className="meme-container">
        <h1 className="meme-title">{getLongTitle(meme)}</h1>

        <div className="meme-inner">
          <figure className="youtube">
            <div className="iframe-container">
              <iframe
                src={`https://www.youtube.com/embed/${youtube.v}?${youtube.list && `list=${youtube.list}`}${youtube.index && `&index=${youtube.index}`}&start=${youtube.start}&amp;end=${youtube.end}&amp;rel=0`} // prettier-ignore
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            <Box caption={caption} cite={cite} />
          </figure>
        </div>
      </div>

      {alsoSee && <AlsoSee alsoSee={alsoSee}></AlsoSee>}

      {footnotes && <Footnotes footnotes={footnotes}></Footnotes>}

      <Footer />
    </>
  );
};

export default YouTube;
