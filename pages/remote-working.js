import Head from "../components/head";
import Footer from "../components/footer";
import memes from "../memes";
import styles from "../styles/RemoteWorking.module.css";

export async function getStaticProps({ params }) {
  const slug = "remote-working";
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
      alt,
      caption = null,
      youtube = null,
      footnotes = null,
    },
  } = props;

  return (
    <div>
      <Head title={title} description={caption} image={image} />
      <div className={styles.videoContainer}>
        <div className="iframeContainer">
          <iframe
            src="//fast.wistia.net/embed/iframe/n54m1lmixt?playerColor=bb6b29&amp;version=v1&amp;videoHeight=315&amp;videoWidth=560&amp;volumeControl=true"
            allowfullscreen></iframe>
        </div>
        <cite>
          Sponsored by "REMOTE"{" "}
          <a href="https://basecamp.com/books/remote?wvideo=n54m1lmixt">
            more info
          </a>{" "}
          <a href="https://amzn.to/2XFcgb9">[Ad] Buy it</a>
        </cite>

        <div className={styles.tweetContainer}>
          <blockquote class="twitter-tweet">
            <p lang="en" dir="ltr">
              Coronavirus discount! I just got REMOTE WORK audiobook for free:
              <a href="https://t.co/F35zZ5P1RT">https://t.co/F35zZ5P1RT</a>
              <a href="https://t.co/ZvZ7CH4Xs6">https://t.co/ZvZ7CH4Xs6</a>
            </p>
            &mdash; Louie Christie (@louiechristie)
            <a href="https://twitter.com/louiechristie/status/1238045934069653504?ref_src=twsrc%5Etfw">
              March 12, 2020
            </a>
          </blockquote>
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charset="utf-8"></script>
        </div>

        <div class="cta">
          <p>
            <a href="https://amzn.to/2XFcgb9">
              [Ad] Buy REMOTE book on Amazon.co.uk
            </a>
          </p>
          <p>
            <iframe
              className={styles.amazonAdContainer}
              marginwidth="0"
              marginheight="0"
              scrolling="no"
              frameborder="0"
              src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=louiechristie-21&language=en_GB&marketplace=amazon&region=GB&placement=0091954673&asins=0091954673&linkId=44f2c06c0b601a6db5b71ca04cbb8377&show_border=true&link_opens_in_new_window=false"></iframe>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
