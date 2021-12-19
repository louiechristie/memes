import Masonry from "react-responsive-masonry";

const images = [
  {
    title: "Police man",
    url: "https://www.thenational.scot/resources/images/13270998.jpg?type=article-full",
  },
  {
    title: "Uber driver",
    url: "https://ichef.bbci.co.uk/news/320/cpsprodpb/1A78/production/_119167760_gettyimages-1233746756.jpg",
  },
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
    <div style={{ padding: 10 }}>
      <main className="page-container">
        <Masonry columnsCount={3} gutter={"4"}>
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

        <div style={{ textAlign: "right" }}>
          <a
            style={{ textDecoration: "none" }}
            href="https://comedy.louiechristie.com/gonzo/">
            😬
          </a>
        </div>
      </main>
    </div>
  );
}
