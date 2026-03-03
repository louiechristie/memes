import { GetStaticProps } from "next";
import { withErrorBoundary, useErrorBoundary } from "react-use-error-boundary";

import Head, { content } from "./head";
import Footer from "./footer";
import MemeListItem from "./memeListItem";

import memes, { Meme } from "../memes";

const { h1, definitionOfMeme, originStory } = content;

export const getStaticProps: GetStaticProps = async () => {
  const items: Meme[] = memes;
  return {
    props: {
      memes,
    },
  };
};

interface Props {
  memes: Meme[];
}

const MemeList = (props: Props) => {
  const memes = props.memes.filter((item) => !item.unlisted);

  const [error, resetError] = useErrorBoundary(
    // You can optionally log the error to an error reporting service
    (error, errorInfo) => console.log(error, errorInfo),
  );

  if (error) {
    // @ts-ignore
    const errorMessage: string = error.message;
    return (
      <div>
        <p>{errorMessage}</p>
        <button onClick={resetError}>Try again</button>
      </div>
    );
  }

  return (
    <>
      <Head
        title="Memes | louiechristie.com"
        image={
          memes.find((item) => item.url === "valuable-lesson")?.image ||
          "/images/lc-icon.svg"
        }
        alt={
          memes.find((item) => item.url === "valuable-lesson")?.alt ||
          "louiechristie.com icon, L C initials handwritten"
        }
        url={"memes/"}
        width={memes[memes.length - 1]?.width || 1200}
        height={memes[memes.length - 1]?.height || 630}
        description="A collection of memes created by Louie Christie."
      />

      <div className="memes-container">
        <div className="meme-definition">
          <blockquote cite="https://en.wiktionary.org/wiki/meme">
            <h1>{h1}</h1>
            <p>&ldquo;{definitionOfMeme}&rdquo;</p>
            <cite>- Wiktionary, 2025</cite>
          </blockquote>
        </div>

        <div className="site-description">
          <blockquote
            className="intro"
            cite="https://en.wiktionary.org/wiki/meme"
          >
            <p>
              <strong>Originally</strong>: &ldquo;{originStory}&rdquo;
            </p>
            <p>
              I don&apos;t really use{" "}
              <a href="https://www.louiechristie.com/about/socials/">
                social media
              </a>{" "}
              any more.
            </p>
            <cite>- Louie Christie</cite>
          </blockquote>
        </div>

        <ul className="memes-list">
          {memes.map((item) => (
            <MemeListItem key={item.url} meme={item} />
          ))}
        </ul>
      </div>

      <Footer />
    </>
  );
};

export default MemeList;
