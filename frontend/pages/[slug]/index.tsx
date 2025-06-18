import * as React from "react";
import Head from "../../components/head";
import Footer from "../../components/footer";
import memes, {
  Meme,
  Item,
  getLongTitle,
  getVideoDescriptor,
  Footnote,
} from "../../memes";
import { GetStaticPaths, GetStaticProps } from "next";
import TimeManagement from "../../components/time-management";
import RemoteWorking from "../../components/remote-working";
import BorisJohnsonsWorkExperience from "../../components/boris-johnsons-work-experience";

interface Props {
  meme: Meme;
  errors: string;
}

interface BoxProps {
  caption?: Meme["caption"];
  cite?: Meme["cite"];
}

function Blockquote(props: { caption: Meme["caption"] }): JSX.Element {
  const { caption } = props;
  if (typeof caption === "string") {
    return (
      <blockquote>
        <p>{caption}</p>
      </blockquote>
    );
  } else if (
    Array.isArray(caption) &&
    caption.every((item) => typeof item === "string")
  ) {
    return (
      <blockquote>
        {caption.map((captionString) => {
          return <p key={captionString}>{captionString}</p>;
        })}
      </blockquote>
    );
  } else {
    return <p>Invalid caption type</p>;
    console.error("Invalid caption type");
  }
}

function Box(props: BoxProps): JSX.Element {
  const { caption, cite } = props;
  return caption ? (
    <figcaption className="meme-fig-caption">
      <Blockquote caption={caption}></Blockquote>
      {cite && <cite> - {cite} </cite>}
    </figcaption>
  ) : (
    <></>
  );
}
interface AlsoSeeProps {
  alsoSee: Item[];
}

function AlsoSee(props: AlsoSeeProps) {
  const { alsoSee } = props;

  return (
    alsoSee && (
      <section className="also-see-container">
        <h2>Also see</h2>
        <ol>
          {alsoSee.map((item: Item, index: number) => {
            const number = index + 1;
            return (
              <li className="also-see" key={item.text || index}>
                {item.link && (
                  <a className="ref" href={item.link || undefined}>
                    {item.text}
                  </a>
                )}
              </li>
            );
          })}
        </ol>
      </section>
    )
  );
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
    customHTML,
    bbc,
    alsoSee,
    footnotes,
  } = meme;

  let longTitle = getLongTitle(meme);
  let videoDescriptor = getVideoDescriptor(meme);
  let description = "meme | louiechristie.com";

  if (youtube) {
    description = `${videoDescriptor} | ${description}`;
  }
  if (caption) {
    description = `${caption} | ${description}`;
  }

  /* https://github.com/vercel/next.js/issues/19527 */

  if (customHTML && url === "boris-johnsons-work-experience")
    return (
      <div>
        <Head
          title={"Is it just me? Or does Boris Johnson..."}
          description={
            "... increasingly look like he's doing a lot of work experience in case he loses his job?"
          }
          image={image}
          url={url}
          alt=""
        />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ maxWidth: 960 }}>
            <h1>{title}</h1>

            <BorisJohnsonsWorkExperience />
          </div>
        </div>
        <Footer />
      </div>
    );

  if (customHTML && url === "remote-working")
    return (
      <>
        <Head
          title={longTitle}
          description={description}
          image={image}
          alt={alt}
          url={url}
        />

        <h1>{title}</h1>

        <RemoteWorking />

        <Footer />
      </>
    );

  if (customHTML && url === "time-management")
    return (
      <>
        <Head
          title={longTitle}
          description={description}
          image={image}
          alt={alt}
          url={url}
        />

        <h1>{title}</h1>

        <TimeManagement />

        <Footer />
      </>
    );

  return (
    <>
      <Head
        title={longTitle}
        description={description}
        image={image}
        alt={alt}
        url={url}
      />

      <div className="meme-container">
        <h1 className="meme-title">{getLongTitle(meme)}</h1>

        <div className="meme-inner">
          {!youtube && !bbc && (
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

          {youtube && (
            <figure className="youtube">
              <div className="iframe-container">
                <iframe
                  src={`https://www.youtube.com/embed/${youtube.v}?${youtube.list && `list=${youtube.list}`}${youtube.index && `&index=${youtube.index}`}&start=${youtube.start}&amp;end=${youtube.end}&amp;rel=0`} // prettier-ignore
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>

              <Box caption={caption} cite={cite} />
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
  const slug = params?.slug;
  const meme = memes.find((meme) => meme.url === slug);
  // By returning { props: item }, the StaticPropsDetail component
  // will receive `item` as a prop at build time
  return { props: { meme } };
};
