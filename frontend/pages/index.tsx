import { GetStaticProps } from "next";
import { withErrorBoundary, useErrorBoundary } from "react-use-error-boundary";

import Head, { content } from "../components/head";
import Footer from "../components/footer";
import MemeListItem from "../components/memeListItem";

import memes, { Meme, getLongTitle } from "../memes";

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

export default withErrorBoundary((props: Props) => {
  const memes = props.memes.filter((item) => !item.unlisted);

  const [error, resetError] = useErrorBoundary(
    // You can optionally log the error to an error reporting service
    (error, errorInfo) => console.log(error, errorInfo)
  );

  if (error) {
    return (
      <div>
        <p>{JSON.stringify(error)}</p>
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
        url={""}
        description={Object.values(content).join(" ")}
      />

      <div className="memes-container">
        <div className="meme-definition">
          <blockquote cite="https://en.wiktionary.org/wiki/meme">
            <h1>{h1}</h1>
            <p>&ldquo;{definitionOfMeme}&rdquo;</p>
            <cite>- Wiktionary, 2025</cite>
          </blockquote>
        </div>

        <ul className="memes-list">
          {memes.map((item) => (
            <MemeListItem key={item.url} meme={item} />
          ))}
        </ul>

        <div className="site-description">
          <blockquote
            className="intro"
            cite="https://en.wiktionary.org/wiki/meme"
          >
            <p>
              <strong>Originally</strong>: &ldquo;{originStory}&rdquo;
            </p>
            <cite>- Louie Christie</cite>
          </blockquote>
        </div>
      </div>

      <Footer />
    </>
  );
});
