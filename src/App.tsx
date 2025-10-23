import { LexDown } from "./lexdown/LexDown";

function App() {
  const readmeString = `
# Zeno

Zeno is a simplified knowledge vault designed to organize your ideas and work into clear, actionable **initiatives**.  
Each initiative can contain **notes, tasks, open questions, and articles**, helping you connect thought and action in one focused space.

---

## Tech Stack

This project was scafolded [T3 Stack](https://create.t3.gg/) as a foundation, with some opinionated additions.

| Layer | Tech | Purpose |
|-------|------|----------|
| **Frontend** | [Next.js 14](https://nextjs.org/) | React framework with App Router and server actions |
| **Auth** | [NextAuth.js](https://next-auth.js.org/) | Secure authentication with multiple providers |
| **ORM** | [Drizzle ORM](https://orm.drizzle.team/) | Type-safe schema-first database layer |
| **Database** | SQLite → PostgreSQL (future) | Lightweight local dev; scalable for production |
| **API Layer** | [tRPC](https://trpc.io/) | End-to-end typesafe backend communication |
| **Validation** | [Zod](https://zod.dev/) | Runtime schema validation and type inference |
| **UI Components** | [ShadCN/UI](https://ui.shadcn.com/) | Reusable and accessible React components |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | Utility-first CSS framework |
| **Themes** | \`next-themes\` | Light/Dark mode toggle |

---

## Features

- Organize content by **Initiatives**
- Take **meeting notes** or general documentation
- Create and track **tasks**
- Record and manage **open questions**
- (Future) Write **articles** or **user stories**
- Link related items for context
- Add **tags** and **favorites** for better organization
- Search and filter across all data

---

## Project Structure

\`\`\`bash
src/
├── app/              # Next.js app router pages
├── components/       # Reusable UI components (ShadCN)
├── server/           # tRPC routers and backend logic
│   ├── db/           # Drizzle schema and queries
│   └── api/          # tRPC routers
├── styles/           # Global styles and Tailwind config
└── utils/            # Reusable helpers (Zod, constants, etc.)
\`\`\`

## License

MIT License © 2025 Alex Stoev
`;

  const handleChange = (val: string) => {
    console.log("handle change", val);
  };
  return (
    <div className="min-h-screen min-w-full bg-slate-800 p-6 text-slate-200">
      <h1 className="border-b border-gray-600">Lex down</h1>
      <LexDown value={readmeString} onChange={(val) => handleChange(val)} />
    </div>
  );
}

export default App;
