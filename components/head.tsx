import Head from "next/head";
import { withErrorBoundary, useErrorBoundary } from "react-use-error-boundary";

import { Meme } from "../memes";

type Props = Pick<Meme, "title" | "caption" | "image" | "url" | "alt"> & {
  description: string | undefined;
};

const h1 = "Shorts";
const definitionOfMeme =
  "Meme... (Internet) Media, usually humorous, which is copied and circulated online with slight adaptations, such as basic pictures, video templates, etc.";
const originStory =
  "I wanted to send a friend a funny video clip on WhatsApp with a decent preview image. This website sort of spiralled from there.";

const content = { h1, definitionOfMeme, originStory };
const suffix = " | meme | louiechristie.com";

export { content };

export default withErrorBoundary((props: Props) => {
  const [error, resetError] = useErrorBoundary(
    // You can optionally log the error to an error reporting service
    (error, errorInfo) => console.log(error, errorInfo),
  );

  if (error) {
    return (
      <div>
        <p>{JSON.stringify(error)}</p>
        <button onClick={resetError}>Try again</button>
      </div>
    );
  }

  if (!props) {
    return (
      <div>
        <p>Error, missing header properties</p>
      </div>
    );
  }

  const { title, description, image, url, alt, caption } = props;

  const siteUrl = "https://www.louiechristie.com/memes/";
  let pageDescription = "";

  if (description) {
    pageDescription = description;
  } else if (caption && typeof caption === "string") {
    pageDescription = caption;
  } else if (
    Array.isArray(caption) &&
    caption.every((item) => typeof item === "string")
  ) {
    pageDescription = caption.join(" ");
  }

  pageDescription = pageDescription + suffix;

  return (
    <div>
      <Head>
        <title>{title}</title>

        <meta property="og:title" content={title} />
        <meta name="description" content={pageDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={`${siteUrl}${url}`} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:image:alt" content={alt} />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="monetization" content="$ilp.gatehub.net/484331722" />
      </Head>

      <div className="center">
        <div>
          <a href="/">
            <img
              className="logo"
              src="https://www.louiechristie.com/images/handwritten_louie_christie_600x220.jpg"
              alt="handwritten Louie Christie"
            ></img>
          </a>
        </div>
      </div>

      <header>
        <nav>
          <h2 className="visually-hidden" id="top-level-navigation-menu">
            Top level navigation menu
          </h2>
          <ul className="nav">
            <li className="nav-item ">
              <a href="/">Home</a>
            </li>
            <li className="nav-item ">
              <a href="/adventure/">Adventure</a>
            </li>
            <li className="nav-item selected">
              <a href="/tech/" aria-current="page">
                Tech
              </a>
            </li>
            <li className="nav-item ">
              <a href="https://comedy.louiechristie.com/">Comedy</a>
            </li>
          </ul>

          <h2 className="visually-hidden" id="secondary-level-navigation-menu">
            Secondary level navigation menu
          </h2>

          <ul className="nav">
            <li className="nav-item">
              <a href="/tech/experiments/" aria-current="page">
                Inventions
              </a>
            </li>
            <li className="nav-item">
              <a href="/tech/host/">Host</a>
            </li>
            <li className="nav-item">
              <a href="https://www.louiechristie.com/intro-to-web-dev-course/">
                Tutorials
              </a>
            </li>
            <li className="nav-item">
              <a href="/tech/offer/">Free Book</a>
            </li>
          </ul>
        </nav>

        <nav>
          <ul className="icon-list">
            <li className="icon-link">
              <a href="https://weather.louiechristie.com/">
                <img
                  width="24"
                  height="24"
                  style={{ width: "24px", height: "24px" }}
                  role="presentation"
                  alt="Weather icon"
                  src="https://weather.louiechristie.com/images/warm/12/favicon.ico"
                ></img>
              </a>
              &nbsp;
              <a href="https://weather.louiechristie.com/">Weather Winton</a>
            </li>
            <li className="icon-link">
              <span className="icon-emoji">
                <a className="icon-link" href="/memes/">
                  🙂
                </a>
              </span>
              <a href="/memes/" aria-current="page">
                Shorts
              </a>
            </li>
            <li className="icon-link">
              <span className="align-middle icon-emoji">
                <a className="icon-link" href="https://www.newcrossities.com/">
                  🗺️
                </a>
              </span>
              <a href="https://www.newcrossities.com/">Quirky Travel Guide</a>
            </li>
            <li>
              <a href="/trivia-trundle/" className="icon-link">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 130 130"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="100%"
                    height="100%"
                    fill="rgb(0, 81, 231)"
                  ></rect>
                  <path
                    transform="translate(0,10)"
                    d=" M45.6459 107.884C41.7309 107.884 38.0229 106.321 35.6469 103.626L3.48989 67.2745C-0.695106 62.5544 0.393896 55.8322
                      5.9199 52.2517C11.4549 48.6558 19.3119 49.603 23.4969 54.3308L44.6559 78.2316L97.8549 5.14315C101.518 0.122749 109.258
                      -1.41725 115.144 1.71665C121.021 4.84285 122.83 11.4649 119.158 16.5007L56.3019 102.818C54.1239 105.828 50.3529 107.707
                      46.2219 107.869C46.0239 107.884 45.8439 107.884 45.6459 107.884Z"
                    fill="white"
                  ></path>
                </svg>
                &nbsp;
              </a>

              <a href="/trivia-trundle/">Trivia Trundle</a>
            </li>
            <li>
              <a className="icon-link" href="/weeks-to-go/">
                <img
                  className="align-middle"
                  width="24"
                  height="24"
                  style={{ width: "24px", height: "24px" }}
                  role="presentation"
                  alt="Icon of a calendar"
                  src="https://www.louiechristie.com/weeks-to-go/favicon.ico"
                ></img>
              </a>
              &nbsp;<a href="/weeks-to-go/">Weeks To Go</a>
            </li>
            <li>
              <a className="icon-link" href="https://www.reckona.co.uk/">
                <img
                  loading="lazy"
                  decoding="async"
                  src="https://www.louiechristie.com/tech/experiments/y54e4unxxl-24.avif"
                  className="icon-image align-text-bottom"
                  width="24"
                  height="24"
                  role="presentation"
                  alt=""
                ></img>
              </a>
              &nbsp;
              <a href="https://www.reckona.co.uk/">Reckona</a>
            </li>
            <li>
              <a href="/blog/" className="icon-link">
                <span className="align-middle icon-emoji">📙</span>
              </a>
              <a href="/blog/">Creative Tech Blog</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
});
