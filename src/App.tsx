import Button from './components/Button'
import Input from './components/Input'
import Card from './components/Card'

function App() {
  return (
    <div className="min-h-screen bg-black-50 p-lg">
      <Card padding="lg">
        <h1 className="font-heading text-2xl text-cello-800 mb-md">Sign In</h1>
        
        <div className="flex flex-col gap-md">
          <Input 
            label="Email" 
            type="email" 
            placeholder="you@example.com" 
          />
          
          <Input 
            label="Password" 
            type="password" 
            placeholder="Enter password" 
          />
          
          <div className="flex gap-sm mt-sm">
            <Button variant="primary">Sign In</Button>
            <Button variant="secondary">Cancel</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default App