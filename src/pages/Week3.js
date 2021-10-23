import { Button, Textarea, Input } from "./../components/Form";
import Card from "./../components/Card";
import Menu from "./../components/Menu";

import Employees from "./../components/Employees";
import { employees } from "./../data/employees.js";

const alizarin = "#e74c3c",
  clouds = "#ecf0f1",
  styles = {
    width: 300,
  };

function Week3() {
  return (
    <>
      <h1>Tydzień 3 - Struktura Aplikacji</h1>
      <h2>Zadanie 1, 2 i 3. Modyfikowalny button, Input i Textarea</h2>
      <div style={styles}>
        <Button bgColor={alizarin} color={clouds}>
          {" "}
          Click me!
        </Button>
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
      <h2>Zadanie 4. Komponent Card</h2>
      <Card />
      <h2>Zadanie 5. Menu</h2>
      <Menu />
      <h2>6. Lista pracowników</h2>
      <Employees employees={employees} />
    </>
  );
}

export default Week3;
