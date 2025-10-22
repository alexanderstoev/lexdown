import { LexDown } from "./lexdown/LexDown";

function App() {
  const mdstring = `# Heading 1

Some extra text in a paragraph

## Some code below

The code block below is awesome

\`var str = "Mooo!!";\``;

  const handleChange = (val: string) => {
    console.log("handle change", val);
  };
  return (
    <div className="min-h-screen min-w-full bg-slate-800 p-6 text-slate-200">
      <h1 className="border-b border-gray-600">Lex down</h1>
      <LexDown value={mdstring} onChange={(val) => handleChange(val)} />
    </div>
  );
}

export default App;
