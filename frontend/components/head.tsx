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
      
        <div className="center">
          <div>
            <img src="https://www.louiechristie.com/images/handwritten_louie_christie_600x220.jpg" alt="handwritten Louie Christie"></img>
          </div>
          <nav style={{display: "inline-block"}}>
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a className="nav-link" href="https://www.louiechristie.com/">home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.louiechristie.com/tech/">tech</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.louiechristie.com/adventure/">adventure</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.louiechristie.com/comedy/">comedy</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.louiechristie.com/about/">about</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
