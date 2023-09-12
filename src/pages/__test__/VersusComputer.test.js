import React from 'react';
import { render} from '@testing-library/react';
import VersusComputer from '../VersusComputer';
import { BrowserRouter } from 'react-router-dom';

  it('should render GameNavbar and initial content', () => {
    render(<BrowserRouter><VersusComputer /></BrowserRouter>);
  });

  //testing Pipeline