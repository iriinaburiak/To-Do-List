import { BrowserRouter as Router, Route } from 'react-router-dom';
import AllTasks from './components/AllTasks';
import DeletedTasks from './components/DeletedTasks';

const App: React.FC = () => {
  return (
    <Router>
      <Route path="/" element={<AllTasks />} />
      <Route path="/deleted" element={<DeletedTasks />} />
    </Router>
  );
};

export default App;
