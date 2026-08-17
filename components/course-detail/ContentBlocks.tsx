import type { ContentBlock } from "@/types/course";

/** Renders a course's rich-text-ish admissions content from typed blocks. */
export default function ContentBlocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="flex flex-col gap-4">
      {blocks.map((block, index) => {
        if (block.type === "heading") {
          return (
            <p key={index} className="font-semibold text-white">
              {block.text}
            </p>
          );
        }
        if (block.type === "list") {
          return (
            <ul key={index} className="flex flex-col gap-2 pl-5 text-pale-blue">
              {block.items.map((item, itemIndex) => (
                <li key={itemIndex} className="list-disc">
                  {item}
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={index} className="text-pale-blue">
            {block.text}
          </p>
        );
      })}
    </div>
  );
}
