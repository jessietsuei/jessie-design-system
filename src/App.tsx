import Button from './components/Button'
import Card from './components/Card'

function App() {
  const flavours = [
    'Vanilla', 'Chocolate', 'Strawberry', 'Mint Chip', 'Cookie Dough',
    'Salted Caramel', 'Pistachio', 'Mango', 'Raspberry', 'Coffee',
    'Cookies & Cream', 'Bubblegum', 'Honeycomb', 'Matcha', 'Coconut',
    'Peanut Butter', 'Cherry', 'Lemon', 'Blueberry', 'Tiramisu'
  ];

  return (
    <div className="min-h-screen bg-cream p-lg">
      <h1 className="font-heading text-4xl text-cello-800 text-center mb-lg">
        WELCOME TO JESSIE'S BUTTON KINGDOM
      </h1>
      
      <Card padding="lg">
        <div className="flex flex-wrap gap-md">
          {flavours.map((flavour, index) => (
  <Button 
    key={flavour} 
    variant={index % 2 === 0 ? 'primary' : 'secondary'}
  >
    {flavour}
  </Button>
))}
  
        </div>
      </Card>
    </div>
  );
}

export default App