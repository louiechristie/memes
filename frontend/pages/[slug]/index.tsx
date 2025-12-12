import * as React from "react";
import { withErrorBoundary, useErrorBoundary } from "react-use-error-boundary";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";

import memes, { Meme, getLongTitle, Footnote, Youtube } from "../../memes";

import Head from "../../components/head";
import Footer from "../../components/footer";
import MemeList from "../../components/memeList";
import YouTube from "../../components/youTube";
import Box from "../../components/box";
import AlsoSee from "../../components/alsoSee";
import TimeManagement from "../../components/time-management";
import RemoteWorking from "../../components/remote-working";
import BorisJohnsonsWorkExperience from "../../components/boris-johnsons-work-experience";

const MemeDetail = withErrorBoundary(
  (props: InferGetStaticPropsType<typeof getStaticProps>) => {
    const [error, resetError] = useErrorBoundary(
      // You can optionally log the error to an error reporting service
      (error, errorInfo) =>
        console.log(
          "MemeDetail Error: ",
          error,
          "MemeDetail error Info: ",
          errorInfo
        )
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

    if (!props.meme) {
      // Needed for production build (but not local build, that uses the index file)
      return <MemeList memes={memes} />;
    }

    let { meme } = props;

    const {
      url,
      title,
      image,
      width,
      height,
      alt,
      caption,
      cite,
      customHTML,
      bbc,
      alsoSee,
      footnotes,
    } = meme;

    let isYoutube = false;

    if ("youtube" in meme) {
      isYoutube = true;
      meme = meme as Youtube;
    }

    let longTitle = getLongTitle(meme);
    let description;

    if (customHTML && url === "boris-johnsons-work-experience")
      return (
        <BorisJohnsonsWorkExperience
          title={title}
          mainImage={image}
          slug={url}
        />
      );

    if (customHTML && url === "remote-working")
      return (
        <RemoteWorking title={longTitle} image={image} alt={alt} url={url} />
      );
    if (customHTML && url === "time-management")
      return (
        <TimeManagement title={longTitle} image={image} alt={alt} url={url} />
      );

    if (isYoutube) return <YouTube meme={meme as Youtube} />;

    return (
      <>
        <Head
          title={longTitle}
          description={description}
          caption={caption}
          image={image}
          alt={alt}
          url={url}
        />

        <div className="meme-container">
          <h1 className="meme-title">{getLongTitle(meme)}</h1>

          <div className="meme-inner">
            {!bbc && (
              <figure className="meme-fig">
                <img
                  src={image}
                  alt={alt}
                  width={width}
                  height={height}
                  loading="lazy"
                />
                {caption && (
                  <figcaption className="meme-fig-caption">
                    <blockquote>{caption}</blockquote>
                  </figcaption>
                )}
              </figure>
            )}

            {bbc && (
              <figure className="meme-fig">
                <a href={bbc.link}>
                  <img
                    src={image}
                    alt={alt}
                    width={width}
                    height={height}
                    loading="lazy"
                  />
                  <p>Watch video</p>
                </a>
                <Box caption={caption} cite={cite} />
              </figure>
            )}
          </div>
        </div>

        {alsoSee && <AlsoSee alsoSee={alsoSee}></AlsoSee>}

        {footnotes && (
          <section className="footnotes-container">
            <h5>Footnotes</h5>
            <ol className="footnotes">
              {footnotes.map((footnote: Footnote, index: number) => {
                const number = index + 1;
                return (
                  <li className="footnote" key={footnote.text || index}>
                    {footnote.text || null}&nbsp;
                    {footnote.link && (
                      <a className="ref" href={footnote.link || undefined}>
                        [{number}]
                      </a>
                    )}
                  </li>
                );
              })}
            </ol>
          </section>
        )}

        <Footer />
      </>
    );
  }
);

export default MemeDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  // Get the paths we want to pre-render based on users
  const paths = memes.map((meme) => {
    return {
      params: { slug: meme.url },
    };
  });

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

export const getStaticProps = (async ({ params }) => {
  const slug = params?.slug;

  const meme = memes.find((meme) => meme.url === slug);

  if (meme) {
    return { props: { meme } };
  } else {
    return { props: { meme: memes[0] } };
  }
}) satisfies GetStaticProps<{
  meme: Meme;
}>;
