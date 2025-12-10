import Button from './components/Button'

function App() {
  return (
    <div className="p-lg">
      <h1 className="text-primary-500 text-xl mb-lg">Jessie's Button Kingdom</h1>
      
      <div className="flex gap-md">
        <Button variant="primary" size="sm">Small</Button>
        <Button variant="primary" size="md">Medium</Button>
        <Button variant="primary" size="lg">Large</Button>
      </div>
      
      <div className="flex gap-md mt-md">
        <Button variant="secondary" size="sm">Small</Button>
        <Button variant="secondary" size="md">Medium</Button>
        <Button variant="secondary" size="lg">Large</Button>
      </div>
    </div>
  );
}

export default App