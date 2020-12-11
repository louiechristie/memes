import Head from "../components/head";
import Footer from "../components/footer";
import memes from "../memes";

export async function getStaticPaths() {
  return {
    paths: memes.map((meme) => `/${meme.url}`) || [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const meme = { ...memes.find(({ url }) => url === slug) };

  return {
    props: {
      meme,
    },
  };
}

export default function Index(props) {
  const {
    meme: {
      url = "",
      title,
      image,
      width = null,
      height = null,
      alt,
      caption = null,
      cite = null,
      youtube = null,
      footnotes = null,
    },
  } = props;

  return (
    <div>
      <Head title={title} description={caption} image={image} />

      <div class="meme-container">
        {!youtube && (
          <figure>
            <center>
              <img src={image} alt={alt} width={width} height={height} />
              {caption && (
                <figcaption>
                  <blockquote>{caption}</blockquote>
                </figcaption>
              )}
            </center>
          </figure>
        )}

        {youtube && (
          <center>
            <figure class="youtube">
              <div class="iframe-container">
                <iframe
                  src={`https://www.youtube.com/embed/${youtube.v}?start=${youtube.start}&amp;end=${youtube.end}&amp;rel=0`}
                  frameborder="0"
                  allowfullscreen></iframe>
              </div>

              {cite && (
                <div class="quote">
                  <blockquote>{caption}</blockquote>
                  <cite> - {cite} </cite>
                </div>
              )}

              {!cite && caption && (
                <figcaption>
                  <blockquote>{caption}</blockquote>
                </figcaption>
              )}
            </figure>
          </center>
        )}
      </div>

      {footnotes &&
        footnotes.map((footnote, index) => {
          const number = index + 1;
          return (
            <section class="footnotes-container">
              <h5>Footnotes</h5>
              <ol class="footnotes">
                <li class="footnote">
                  {footnote.text || noll}&nbsp;
                  {footnote.link && (
                    <a class="ref" href={footnote.link || null}>
                      [{number}]
                    </a>
                  )}
                </li>
              </ol>
            </section>
          );
        })}

      <Footer />
    </div>
  );
}
