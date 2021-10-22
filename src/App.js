import './App.css';

import { Button, Textarea, Input } from "./components/Form";
import Card from './components/Card'
import Menu from './components/Menu';

import Employees from "./components/Employees";
import { employees } from "./data/employees.js";

function App() {
const alizarin = '#e74c3c',
      clouds =  '#ecf0f1',
      styles = {
        width: 300
      }

  return (
    <div className="App">
      <aside>
      <h3>Zadanie 5. Przygotuj menu nawigacyjne</h3>
        <Menu/>
      </aside>
      <main>
        <div style={styles}>
          <h3>Zadanie 1, 2 i 3. Modyfikowalny button, Input i Textarea</h3>
          <Button bgColor={alizarin} color={clouds}> Click me!</Button>
          <Input
            bgColor={alizarin}
            color={clouds}
            borderSize={8}
            borderRadius={5}
            borderColor={alizarin}
          />
          <Textarea
            bgColor={alizarin}
            color={clouds}
            borderSize={4}
            borderRadius={5}
            borderColor={alizarin}
          />
        </div>
          <h3>Zadanie 4. Komponent Card</h3>
          <Card />
          <h3>6. Lista pracowników</h3>
          <Employees employees={employees} />
        </main>
    </div>
  );
}

export default App;
