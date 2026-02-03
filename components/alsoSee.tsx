import { Item } from "../memes";

interface AlsoSeeProps {
  alsoSee: Item[];
}

const AlsoSee = (props: AlsoSeeProps): JSX.Element => {
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
};
export default AlsoSee;
