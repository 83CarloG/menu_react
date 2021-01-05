import './App.css';
import { AnimatedHamburger } from './components/AnimateHamburger'
const items = [
  { icon: 'fab fa-linkedin', url: 'http://www.google.com' },
  { icon: 'fab fa-facebook', url: 'http://www.google.com' },
  { icon: 'fab fa-instagram', url: 'http://www.google.com' },
  { icon: 'fab fa-github', url: 'http://www.google.com' },
  { icon: 'fab fas fa-envelope', url: 'http://www.google.com' },
  { icon: 'fab fa-telegram', url: 'http://www.google.com' },
];

function App() {

  // const [open, setOpen] = useState<boolean>(false);
  // const goto = (url: string) => {
  //   window.open(url);
  //   setOpen(false);
  // }

  return (
    <div>
      <AnimatedHamburger items={items}/>
      
    </div>
  );
}

export default App;
