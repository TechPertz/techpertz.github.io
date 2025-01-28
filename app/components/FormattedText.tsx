export default function FormattedText({ text }: { text: string }) {
  const parts = text.split(/(<b>.*?<\/b>)/g);

  return (
    <span>
      {parts.map((part, i) => {
        if (part.startsWith('<b>') && part.endsWith('</b>')) {
          const boldText = part.substring(3, part.length - 4);
          return <strong key={i}>{boldText}</strong>;
        }
        return <span key={i}>{part}</span>;
      })}
    </span>
  );
}
