import Masonry from "react-responsive-masonry";

const images = [
  {
    title: "Army man",
    url: "https://pbs.twimg.com/media/E4phY5OWEAAS9wz?format=jpg&name=900x900",
  },
  {
    title: "Foreman",
    url: "https://fournews-assets-prod-s3-ew1-nmprod.s3.amazonaws.com/media/2021/04/Screenshot-2021-04-26-at-19.24.28-300x169.png",
  },

  {
    title: "Chemical weapons specialist",
    url: "https://fournews-assets-prod-s3-ew1-nmprod.s3.amazonaws.com/media/2021/01/FIypZGM8D6H_image-300x169.png",
  },

  {
    title: "GP",
    url: "https://fournews-assets-prod-s3-ew1-nmprod.s3.amazonaws.com/media/2020/11/2O5iAL1eops_image-300x169.png",
  },

  {
    title: "Fisherman",
    url: "https://fournews-assets-prod-s3-ew1-nmprod.s3.amazonaws.com/media/2020/07/2.54703083-300x169.jpg",
  },

  {
    title: "Train engineer",
    url: " https://fournews-assets-prod-s3-ew1-nmprod.s3.amazonaws.com/media/2020/02/tXgj5MuXWXw_image-1-300x169.png",
  },

  {
    title: "Home economics teacher",
    url: "https://fournews-assets-prod-s3-ew1-nmprod.s3.amazonaws.com/media/2019/11/kpA9c7cLjdH_image-300x169.png",
  },
];

export default function BorisJohnsonsWorkExperience() {
  return (
    <main className="page-container">
      <Masonry columnsCount={3} gutter={4}>
        {images.map((image) => (
          <figure key={image.url}>
            <img src={image.url} style={{ width: "100%" }} />
            <figcaption>
              <p>{image.title}</p>
            </figcaption>
          </figure>
        ))}
      </Masonry>

      <p
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "2rem",
          marginBottom: "5rem",
        }}>
        <strong>He should try being professional politician next.</strong>
      </p>
      <h2>Footnotes</h2>

      <p>
        <sub>
          [*] Pastiche pictures from{" "}
          <a href="https://www.channel4.com/news/?s=boris">Channel 4 news</a>{" "}
          except the Army Man photo which comes from Boris's actual own{" "}
          <a href="https://twitter.com/BorisJohnson/status/1408045806679203845/photo/1">
            Twitter
          </a>
          .
        </sub>
      </p>
      <div style={{ textAlign: "right" }}>
        <a
          style={{ textDecoration: "none" }}
          href="https://comedy.louiechristie.com/gonzo/">
          😬
        </a>
      </div>
    </main>
  );
}
