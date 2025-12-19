import { useState } from 'react'
import Button from './components/Button'
import Card from './components/Card'
import Navbar from './components/Navbar'

function App() {
  const [selectedFlavour, setSelectedFlavour] = useState<string | null>(null);
  
  const flavours = [
    { name: 'Vanilla', color: 'bg-amber-50' },
    { name: 'Chocolate', color: 'bg-amber-900' },
    { name: 'Strawberry', color: 'bg-pink-300' },
    { name: 'Mint Chip', color: 'bg-emerald-200' },
    { name: 'Cookie Dough', color: 'bg-amber-200' },
    { name: 'Salted Caramel', color: 'bg-amber-400' },
    { name: 'Pistachio', color: 'bg-green-300' },
    { name: 'Mango', color: 'bg-orange-300' },
    { name: 'Raspberry', color: 'bg-rose-400' },
    { name: 'Coffee', color: 'bg-stone-600' },
    { name: 'Cookies & Cream', color: 'bg-stone-300' },
    { name: 'Bubblegum', color: 'bg-pink-400' },
    { name: 'Honeycomb', color: 'bg-yellow-400' },
    { name: 'Matcha', color: 'bg-lime-400' },
    { name: 'Coconut', color: 'bg-slate-100' },
    { name: 'Peanut Butter', color: 'bg-orange-700' },
    { name: 'Cherry', color: 'bg-red-500' },
    { name: 'Lemon', color: 'bg-yellow-200' },
    { name: 'Blueberry', color: 'bg-indigo-400' },
    { name: 'Tiramisu', color: 'bg-stone-400' },
  ];

  const backgroundColour = selectedFlavour 
    ? flavours.find(f => f.name === selectedFlavour)?.color 
    : 'bg-cream';

  return (
    <div className={`min-h-screen transition-colors duration-500 ease-out ${backgroundColour}`}>
      <Navbar />
      
      <div className="p-lg">
        <h1 className="font-heading text-4xl text-cello-800 text-center mb-lg">
          WELCOME TO JESSIE'S BUTTON KINGDOM
        </h1>
        
        <Card padding="lg">
          <div 
            className="flex flex-wrap gap-md justify-center"
            onMouseLeave={() => setSelectedFlavour(null)}
          >
            {flavours.map((flavour, index) => (
              <div
                key={flavour.name}
                className={`transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                  ${selectedFlavour && selectedFlavour !== flavour.name 
                    ? 'opacity-40 blur-[2px] scale-95' 
                    : 'opacity-100 blur-0 scale-100'
                  }`}
              >
                <Button 
                  variant={index % 2 === 0 ? 'primary' : 'secondary'}
                  onClick={() => setSelectedFlavour(flavour.name)}
                >
                  {flavour.name}
                </Button>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

export default App