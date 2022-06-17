import Collapse from './components/Collapse';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const text = 'collapse me';
  return (
    <>
      <Collapse text={text} opened={false} />
    </>
  );
}

export default App;
