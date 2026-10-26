const items = [
  "R&M CLOTHING",
  "PERFORMANCE",
  "STYLE",
  "DISCIPLINE",
  "TRAIN HARD",
  "MOVE STRONG",
];

function Row() {
  return (
    <div className="flex items-center">
      {items.map((item) => (
        <span key={item} className="flex items-center px-4 text-[0.72rem] font-medium tracking-[0.28em]">
          {item}
          <span className="ml-8 text-white/45" aria-hidden="true">
            •
          </span>
        </span>
      ))}
    </div>
  );
}

export function Marquee() {
  return (
    <section aria-label="Signature R&M" className="overflow-hidden bg-black py-4 text-white">
      <div className="marquee-track">
        <Row />
        <div aria-hidden="true">
          <Row />
        </div>
      </div>
    </section>
  );
}
