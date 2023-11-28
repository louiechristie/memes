import Head from "next/head";
import { Meme } from "../memes";

type Props =
  | Pick<Meme, "title" | "caption" | "image" | "url" | "alt"> & {
      description?: string;
    };

export default function Index(props: Props) {
  const {
    title = "memes | louiechristie.com",
    description = "... (Internet, slang) Something, usually humorous, which is copied and circulated online with slight adaptations, including quizzes, basic pictures, video templates etc.",
    image = "/images/lc-icon.svg",
    url = "",
    alt = "louiechristie.com icon, L C initials handwritten",
    caption,
  } = props;

  const siteUrl = "https://www.louiechristie.com/memes/";

  return (
    <div>
      <Head>
        <title>{title}</title>

        <meta property="og:title" content={title} />
        <meta name="description" content={description || caption} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={`${siteUrl}${url}`} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:image:alt" content={alt} />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="monetization" content="$ilp.gatehub.net/484331722" />
      </Head>

      <header>
        <nav>
          <div id="home-button">
            <a href="/">
              <img
                src="/images/lc-icon.svg"
                width="40"
                height="40"
                alt="louiechristie.com icon, L C initials handwritten"
                role="img"
              />
            </a>
          </div>
          <div id="hamnav">
            <label htmlFor="hamburger">&#9776;</label>
            <input type="checkbox" id="hamburger" />
            <div id="hamitems">
              <a href="/">home</a> <a href="/adventure/">adventure</a>
              <a href="/blog/">blog</a>
              <a href="https://comedy.louiechristie.com">comedy</a>
              <a href="/#experiments">experiments</a>
              <a href="/#tech-talks">talks</a>
              <a href="/intro-to-web-dev-course/">tutorials</a>
              <a href="/memes/" className="active">
                memes
              </a>
              <a href="https://www.musicnatters.com">podcasts</a>
              <a href="/#profiles">profiles</a>
              <a href="/#about">about</a>
              <a href="/blog/contact/">contact</a>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
