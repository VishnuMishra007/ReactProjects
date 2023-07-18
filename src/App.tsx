import { Counter } from './components/Counter';
import store from './store';
import {Provider} from 'react-redux';

const App = () =>  {
  return (
    <Provider store={store}>
      <div className="App">
      <Counter/>
      </div>
    </Provider>
  );
}

export default App;
