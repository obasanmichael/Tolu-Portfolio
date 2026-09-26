import { type Principle } from "@/types";

export const principles: Principle[] = [
  {
    number: "01",
    title: "Clarity before complexity",
    description:
      "I prefer simple, understandable solutions before adding layers of abstraction. Code should communicate intent, not hide it.",
  },
  {
    number: "02",
    title: "Product thinking",
    description:
      "I care about what the software is supposed to achieve, not only the code. Good engineering starts with understanding the problem.",
  },
  {
    number: "03",
    title: "Reliability matters",
    description:
      "I pay attention to error states, edge cases, and maintainability. Software that works once is not the same as software that works consistently.",
  },
  {
    number: "04",
    title: "The model proposes, code enforces",
    description:
      "Countable facts, limits and approvals live in code. AI handles judgment and language, and a person signs off before anything reaches a client.",
  },
  {
    number: "05",
    title: "Polished user experience",
    description:
      "I believe good engineering should feel smooth to the person using the product. The user's experience is part of the engineering quality.",
  },
  {
    number: "06",
    title: "Documentation and handover",
    description:
      "I value decisions that future engineers can understand and maintain. Work that can't be handed over is incomplete.",
  },
];
