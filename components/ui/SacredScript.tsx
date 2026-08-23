type Props = {
  inverse?: boolean;
  className?: string;
};

export default function SacredScript({
  inverse = false,
  className = "",
}: Props) {
  return (
    <p
      className={`sacred-script ${
        inverse ? "sacred-script--inverse" : ""
      } ${className}`}
      aria-label="Om namo Narayanaya"
    >
      <span lang="sa" aria-hidden="true" className="sacred-script__devanagari">
        ॐ नमो नारायणाय
      </span>
      <span aria-hidden="true" className="sacred-script__rule" />
      <span aria-hidden="true" className="sacred-script__transliteration">
        Oṁ Namo Nārāyaṇāya
      </span>
    </p>
  );
}
