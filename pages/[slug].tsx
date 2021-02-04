import * as React from "react";
import Head from "../components/head";
import Footer from "../components/footer";
import memes, { Meme, Footnote } from "../memes";
import { GetStaticPaths, GetStaticProps } from "next";
import TimeManagement from "../components/time-management";
import RemoteWorking from "../components/remote-working";

interface Props {
  meme: Meme;
  errors: string;
}

export default function MemeDetail(props: Props) {
  const { errors, meme } = props;

  if (errors) {
    return (
      <div title="Error">
        <p>
          <span style={{ color: "red" }}>Error:</span> {errors}
        </p>
      </div>
    );
  }

  const {
    url,
    title,
    image,
    width,
    height,
    alt,
    caption,
    cite,
    youtube,
    footnotes,
    customHTML,
  } = meme;

  let longTitle = title;
  let description = "meme | louichristie.com";

  if (youtube) {
    const length = youtube.end - youtube.start;
    const mins = Math.round(length / 60) || "";
    const sec = length % 60;
    longTitle = `${title} | video [${mins ? mins + " mins" : sec + " sec"}]`;
  }

  if (caption) {
    description = `${caption} | ${description}`;
  }

  /* https://github.com/vercel/next.js/issues/19527 */
  if (customHTML && url === "remote-working")
    return (
      <>
        <Head title={longTitle} description={description} image={image} />

        <RemoteWorking />

        <Footer />
      </>
    );

  if (customHTML && url === "time-management")
    return (
      <>
        <Head title={longTitle} description={description} image={image} />

        <TimeManagement />

        <Footer />
      </>
    );

  return (
    <>
      <Head title={longTitle} description={description} image={image} />

      <div className="meme-container">
        <h1 className="meme-title">{title}</h1>

        <div className="meme-inner">
          {!youtube && (
            <figure className="meme-fig">
              <img
                src={image}
                alt={alt}
                width={width || undefined}
                height={height || undefined}
              />
              {caption && (
                <figcaption className="meme-fig-caption">
                  <blockquote>{caption}</blockquote>
                </figcaption>
              )}
            </figure>
          )}

          {youtube && (
            <figure className="youtube">
              <div className="iframe-container">
                <iframe
                  src={`https://www.youtube.com/embed/${youtube.v}?start=${youtube.start}&amp;end=${youtube.end}&amp;rel=0`}
                  frameBorder="0"
                  allowFullScreen></iframe>
              </div>

              {caption && (
                <div className={cite ? "quote" : ""}>
                  <blockquote>{caption}</blockquote>
                  {cite && <cite> - {cite} </cite>}
                </div>
              )}
            </figure>
          )}
        </div>
      </div>

      {footnotes &&
        footnotes.map((footnote: Footnote, index: number) => {
          const number = index + 1;
          return (
            <section className="footnotes-container">
              <h5>Footnotes</h5>
              <ol className="footnotes">
                <li className="footnote">
                  {footnote.text || null}&nbsp;
                  {footnote.link && (
                    <a className="ref" href={footnote.link || undefined}>
                      [{number}]
                    </a>
                  )}
                </li>
              </ol>
            </section>
          );
        })}

      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Get the paths we want to pre-render based on users
  const paths = memes.map((meme) => ({
    params: { slug: meme.url },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const slug = params?.slug;
    const meme = memes.find((meme) => meme.url === slug);
    // By returning { props: item }, the StaticPropsDetail component
    // will receive `item` as a prop at build time
    return { props: { meme } };
  } catch (err) {
    return { props: { errors: err.message, meme: {} } };
  }
};
