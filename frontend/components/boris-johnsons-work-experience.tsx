import Head from "./head";
import Footer from "./footer";

const images = [
  {
    title: "Police man",
    url: "https://www.thenational.scot/resources/images/13270998.jpg?type=article-full",
    alt: "Boris Jonson in a police bullet proof vest and black wooly hat with a police man",
  },

  {
    title: "Uber driver",
    url: "https://ichef.bbci.co.uk/news/320/cpsprodpb/1A78/production/_119167760_gettyimages-1233746756.jpg",
    alt: "Boris Jonson in a silver car giving a thumbs up out the driver window. He is wearing a grey jacket and a medical face mask.",
  },
  {
    title: "Army man",
    url: "https://pbs.twimg.com/media/E4phY5OWEAAS9wz?format=jpg&name=900x900",
    alt: "Boris Jonson sat in a military vehicle driver seat. He is wearing a suit. The vehicle is desert colour and has a machine gun on the tip. It is parked on grass.",
  },

  {
    title: "Foreman",
    url: "https://fournews-assets-prod-s3-ew1-nmprod.s3.amazonaws.com/media/2021/04/Screenshot-2021-04-26-at-19.24.28-300x169.png",
    alt: "Boris Jonson in a high vis vest, in what looks like a warehouse.",
  },

  {
    title: "Chemical weapons specialist",
    url: "https://fournews-assets-prod-s3-ew1-nmprod.s3.amazonaws.com/media/2021/01/FIypZGM8D6H_image-300x169.png",
    alt: "Boris Johnson in medical scrubs, gloves, and a face mask, holding a box of test tubes.",
  },

  {
    title: "GP",
    url: "https://fournews-assets-prod-s3-ew1-nmprod.s3.amazonaws.com/media/2020/11/2O5iAL1eops_image-300x169.png",
    alt: "Boris Johnson in a white coat in a room with blue medial boxes behind him on a shelf and white walls",
  },

  {
    title: "Fisherman",
    url: "https://fournews-assets-prod-s3-ew1-nmprod.s3.amazonaws.com/media/2020/07/2.54703083-300x169.jpg",
    alt: "Boris Johnson holding big crabs, one in each hand. A boat mast is behind him.",
  },

  {
    title: "Train engineer",
    url: " https://fournews-assets-prod-s3-ew1-nmprod.s3.amazonaws.com/media/2020/02/tXgj5MuXWXw_image-1-300x169.png",
    alt: "Boris Johnson in hard hat and high vis orange waterproof jacket",
  },

  {
    title: "Home economics teacher",
    url: "https://fournews-assets-prod-s3-ew1-nmprod.s3.amazonaws.com/media/2019/11/kpA9c7cLjdH_image-300x169.png",
    alt: "Boris Johnson in a classroom sat at a table wearing a blue apron net to a child wearing the same. He is rolling something in his hands, either dough or clay.",
  },
];

interface Props {
  title: string;
  mainImage: string;
  slug: string;
}

export default function BorisJohnsonsWorkExperience(props: Props) {
  const { title, mainImage, slug } = props;
  return (
    <div>
      <Head
        title={"Is it just me? Or does Boris Johnson..."}
        description={
          "... increasingly look like he's doing a lot of work experience in case he loses his job?"
        }
        image={mainImage}
        url={slug}
        alt=""
        caption=""
      />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ maxWidth: 960 }}>
          <h1>{title}</h1>

          <div style={{ padding: 10 }}>
            <main className="page-container">
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto auto auto",
                  columnGap: 20,
                }}
              >
                {images.map((image) => (
                  <figure key={image.url}>
                    <img
                      src={image.url}
                      style={{ width: "100%" }}
                      alt={image.alt}
                    />
                    <figcaption>
                      <p>{image.title}</p>
                    </figcaption>
                  </figure>
                ))}
              </div>

              <p
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "2rem",
                  marginBottom: "5rem",
                }}
              >
                <strong>
                  He should try being professional politician next.
                </strong>
              </p>

              <div style={{ textAlign: "right" }}>
                <a
                  style={{ textDecoration: "none" }}
                  href="https://comedy.louiechristie.com/gonzo/"
                >
                  😬
                </a>
              </div>
            </main>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
