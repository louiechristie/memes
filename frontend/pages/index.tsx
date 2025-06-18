import Link from "next/link";
import { GetStaticProps } from "next";
import Head, { content } from "../components/head";
import Footer from "../components/footer";

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

export default function Index(props: Props) {
  const memes = props.memes.filter((item) => !item.unlisted);

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
        <div className="site-description">
          <blockquote
            className="meme-definition"
            cite="https://en.wiktionary.org/wiki/meme"
          >
            <p>
              <strong>{h1}</strong> {definitionOfMeme}
            </p>
            <cite>- Wiktionary, 2020</cite>
          </blockquote>

          <p className="intro">{originStory}</p>
        </div>

        <ul className="memes-list">
          {memes.map((item) => (
            <Link
              key={item.url}
              href={`${process.env.ASSET_PREFIX}/${item.url}/`}
            >
              <li className="box-shadow">
                <img
                  src={item.image}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  loading="lazy"
                />
                <h2>{getLongTitle(item)}</h2>
              </li>
            </Link>
          ))}
        </ul>
      </div>

      <Footer />
    </>
  );
}
