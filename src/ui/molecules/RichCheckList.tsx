"use client";

import { CheckList } from "@/ui/atoms/Primitives";
import type { RichItem } from "@/models/content.model";

export const RichCheckList = ({ items }: { items: RichItem[] }) => (
  <CheckList>
    {items.map((item) => (
      <li key={item.text}>
        {item.lead && <strong>{item.lead}</strong>} {item.text}
      </li>
    ))}
  </CheckList>
);

export default RichCheckList;
