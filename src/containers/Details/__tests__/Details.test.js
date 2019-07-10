import React from 'react';
import { Provider } from 'react-redux';
import axios from 'axios';
import { cleanup, waitForElement, getByTitle } from 'react-testing-library';

import renderWithRouter from '../../../config/renderWithRouter';
import store from '../../../store';
import Details from '../Details';
import { API_URL, API_KEY } from '../../../config/index';

describe('Details Component', () => {
  const fetchArticles = async () => {
    const period = 7;
    const url = `${API_URL}/${period}.json?api-key=${API_KEY}`;
    const { data: { results = [] } } = await axios.get(url);
    return results;
  };

  afterEach(() => cleanup());

  it('renders component', () => {
    const renderedComponent = renderWithRouter(
      <Provider store={store}>
        <Details />
      </Provider>
    );
    expect(renderedComponent.container).toMatchSnapshot();
  });

  it('should render all NY-Times-Article-Details in the iframe for the given URL', async () => {
    const results = await fetchArticles();
    const url = results[0].url;
    const { getByTitle } = renderWithRouter(<Details />, { route: `?url=${url}` });
    
    await waitForElement(() => getByTitle('nyFrame'));
    expect(getByTitle('nyFrame').src).toEqual(url);
  },10000);
});
