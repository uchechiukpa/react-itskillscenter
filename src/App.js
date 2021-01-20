import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GetOneFile from './endpoints/Getonefile';
import Createfile from './endpoints/Createfiles';
import Editfile from './endpoints/Editfiles';
import HomePage from './home/Homepage';

function App() {
  return (

    < Router >
      <div className='App'>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/createfile' exact component={Createfile} />
          <Route path='/getfile/:id' exact component={GetOneFile} />
          <Route path='/editfile/:id' exact component={Editfile} />
        

        </Switch>
      </div>

    </Router >
  );
}

export default App;
