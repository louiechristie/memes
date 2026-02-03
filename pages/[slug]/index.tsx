import * as React from "react";
import { withErrorBoundary, useErrorBoundary } from "react-use-error-boundary";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";

import memes, { Meme, Footnote, Youtube, isYoutube } from "../../memes";

import Head from "../../components/head";
import Footer from "../../components/footer";
import MemeList from "../../components/memeList";
import YouTube from "../../components/youTube";
import Box from "../../components/box";
import AlsoSee from "../../components/alsoSee";
import Footnotes from "../../components/footnotes";
import TimeManagement from "../../components/time-management";
import RemoteWorking from "../../components/remote-working";
import BorisJohnsonsWorkExperience from "../../components/boris-johnsons-work-experience";

import limit from "../../utilities/limit";

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
      alsoSee,
      footnotes,
    } = meme;

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
      return <RemoteWorking title={title} image={image} alt={alt} url={url} />;
    if (customHTML && url === "time-management")
      return <TimeManagement title={title} image={image} alt={alt} url={url} />;

    if (isYoutube(meme)) return <YouTube meme={meme as Youtube} />;

    return (
      <>
        <Head
          title={title}
          description={description}
          caption={caption}
          image={image}
          alt={alt}
          url={url}
        />

        <div className="meme-container">
          <h1 className="meme-title">{title}</h1>

          <div className="meme-inner">
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
          </div>
        </div>

        {alsoSee && <AlsoSee alsoSee={alsoSee}></AlsoSee>}

        {footnotes && <Footnotes footnotes={footnotes}></Footnotes>}

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
