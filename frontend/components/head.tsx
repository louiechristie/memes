import Head from "next/head";
import { Meme } from "../memes";

type Props =
  | Pick<Meme, "title" | "caption" | "image" | "url" | "alt"> & {
      description: string;
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
        <iframe
          src="https://www.louiechristie.com/menu"
          style={{ width: "100%", height: "100px" }}
          frameBorder="0"
        ></iframe>
      </header>
    </div>
  );
}
