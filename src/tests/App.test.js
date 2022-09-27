import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';
import store from '../redux/configureStore';

test('renders App Component', () => {
  render(
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>,
  );
});
