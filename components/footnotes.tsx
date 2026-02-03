import { Footnote } from "../memes";

interface Props {
  footnotes: Footnote[];
}

const Footnotes = (props: Props): JSX.Element => {
  const { footnotes } = props;

  return (
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
  );
};

export default Footnotes;
