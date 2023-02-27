import logo from './logo.svg';
import  Todo  from './components/Todo';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Stack, ThemeProvider } from 'react-bootstrap';


function App() {
  return (
    <ThemeProvider
  breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
  minBreakpoint="xxs"
>
<Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/">TODO APP</Nav.Link>
      </Nav.Item>
    </Nav>

<Stack gap={2} className="col-md-5 mx-auto">
<Todo></Todo>
    </Stack>

</ThemeProvider>

  );
}

export default App;