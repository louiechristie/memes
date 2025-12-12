import Link from "next/link";
import { withErrorBoundary, useErrorBoundary } from "react-use-error-boundary";

import { Meme, getLongTitle } from "../memes";

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
    <Link key={meme.url} href={`${process.env.ASSET_PREFIX}/${meme.url}/`}>
      <li className="box-shadow">
        <img
          src={meme.image}
          alt={meme.alt}
          width={meme.width}
          height={meme.height}
          loading="lazy"
        />
        <h2>{getLongTitle(meme)}</h2>
      </li>
    </Link>
  );
});

export default MemeListItem;
