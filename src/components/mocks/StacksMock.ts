export interface Stacks {
  Backend: string[];
  Frontend: string[];
  Testes: string[];
  Variadas: string[];
}

const stacks: Stacks[] = [
  {
    Backend: ["PHP", "Laravel", "Node.js"],
    Frontend: ["Javascript", "React", "Vue.js", "Next.js"],
    Testes: ["PhpUnit", "Pest 2.0", "Jest"],
    Variadas: ["AWS", "Docker", "Linux"],
  },
];

export { stacks };
