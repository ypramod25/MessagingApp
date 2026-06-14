import { Button } from "@/components/ui/button";//@ is alias for src folder, so we can use it to import components from src/components/ui/button.jsx

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Button className="cursor-pointer hover:bg-red-500">Shadcn Working 🚀</Button>
    </div>
  );
}

export default App;