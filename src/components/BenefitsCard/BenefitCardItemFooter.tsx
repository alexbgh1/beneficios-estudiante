import Alias from "../Alias";

const BenefitCardItemFooter = ({ aliases }: { aliases: string[] }) => {
  return (
    <footer className="flex justify-between px-2 py-2">
      {aliases.length > 0 && (
        <section>
          <h4 className="px-2 text-sm font-bold text-primary">Alias</h4>
          <ul className="flex flex-row gap-2 justify-between px-2 py-2">
            {aliases.map((alias, index) => (
              <Alias key={index} alias={alias} />
            ))}
          </ul>
        </section>
      )}
    </footer>
  );
};

export default BenefitCardItemFooter;
