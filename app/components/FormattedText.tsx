export default function FormattedText({ text }: { text: string }) {
  // Split text by <b> and </b> tags
  const parts = text.split(/(<b>.*?<\/b>)/g);

  return (
    <span>
      {parts.map((part, i) => {
        if (part.startsWith('<b>') && part.endsWith('</b>')) {
          // Extract text between <b> tags and make it bold
          const boldText = part.substring(3, part.length - 4);
          return <strong key={i}>{boldText}</strong>;
        }
        return <span key={i}>{part}</span>;
      })}
    </span>
  );
}
