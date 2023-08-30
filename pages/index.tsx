import Link from "next/link";
import { GetStaticProps } from "next";
import Head from "../components/head";
import Footer from "../components/footer";

import memes, { Meme, getLongTitle } from "../memes";

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
        description="'... (Internet, slang) Something, usually humorous, which is copied and circulated online with slight adaptations, including quizzes, basic pictures, video templates etc. - Wiktionary'"
        image={
          memes.find((item) => item.url === "valuable-lesson")?.image ||
          "/images/lc-icon.svg"
        }
        alt={
          memes.find((item) => item.url === "valuable-lesson")?.alt ||
          "louiechristie.com icon, L C initials handwritten"
        }
        url={""}
      />

      <div className="memes-container">
        <blockquote
          className="meme-definition"
          cite="https://en.wiktionary.org/wiki/meme">
          <p>
            <strong>Meme</strong> ... (Internet, slang) Something, usually
            humorous, which is copied and circulated online with slight
            adaptations, including quizzes, basic pictures, video templates etc.
          </p>
          <cite>- Wiktionary, 2020</cite>
        </blockquote>

        <ul className="memes-list">
          {memes.map((item) => (
            <Link
              key={item.url}
              href={`${process.env.ASSET_PREFIX}/${item.url}/`}>
              <a>
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
              </a>
            </Link>
          ))}
        </ul>
      </div>

      <Footer />
    </>
  );
}
