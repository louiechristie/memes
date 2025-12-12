import Link from "next/link";
import { withErrorBoundary, useErrorBoundary } from "react-use-error-boundary";

import { Meme, isYoutube, getVideoDescriptor } from "../memes";

interface Props {
  meme: Meme;
}

const MemeListItem = withErrorBoundary((props: Props) => {
  const { meme } = props;

  const [error, resetError] = useErrorBoundary(
    // You can optionally log the error to an error reporting service
    (error, errorInfo) => console.log(error, errorInfo)
  );

  if (error) {
    return (
      <div>
        <p>{JSON.stringify(error)}</p>
        <button onClick={resetError}>Try again</button>
      </div>
    );
  }

  return (
    <div key={meme?.url}>
      <Link href={`${process.env.ASSET_PREFIX}/${meme?.url}/`}>
        <li className="box-shadow">
          <img
            src={meme.image}
            alt={meme.alt}
            width={meme.width}
            height={meme.height}
            loading="lazy"
          />
          {isYoutube(meme) && <h2>{getVideoDescriptor(meme)}</h2>}
          {!isYoutube(meme) && <h2>{meme.title}</h2>}
        </li>
      </Link>
    </div>
  );
});

export default MemeListItem;
