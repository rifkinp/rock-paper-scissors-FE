import { fireEvent, render, screen } from '@testing-library/react';
import CreateRoom from '../CreateRoom';
import Background from '../../Components/Elements/Background';
import InputRoom from '../../Components/Fragments/InputRoom';
import ChoiceRoom from '../../Components/Fragments/ChoiceRoom';
import ButtonYellow from '../../Components/Elements/ButtonYellow';
import { BrowserRouter } from 'react-router-dom';

test('should render CreateRoom', () => {
  render(
    <BrowserRouter>
      <CreateRoom />
    </BrowserRouter>,
  );
  // const CreateNewroom = screen.getAllByAltText(/CREATE NEW ROOM/i);
  const Choice = screen.getByText('Please input the room name you want to create');
  const PilihBatu = screen.getAllByAltText('batu');
  const PilihGunting = screen.getAllByAltText('gunting');
  const PilihKertas = screen.getAllByAltText('kertas');

  expect(Choice).toBeInTheDocument();
  expect(PilihBatu).toBeTruthy();
  expect(PilihGunting).toBeTruthy();
  expect(PilihKertas).toBeTruthy();
});

test('renders Background component without children', () => {
  render(<Background />);

  const backgroundElement = screen.getByTestId('bg-element');
  expect(backgroundElement).toBeInTheDocument();
  expect(backgroundElement.children.length).toBe(0);
});

test('should render text on create room page remark', () => {
  render(<InputRoom />);

  expect(
    screen.getByText('Please input the room name you want to create'),
  ).toBeInTheDocument();
  expect(screen.getByAltText('box')).toBeInTheDocument();
});

test('menampilkan ChoiceRoom dengan pilihan default', () => {
  render(<ChoiceRoom choiceResponse='' />);

  expect(screen.getByText('Please pick your choice')).toBeInTheDocument();
  expect(screen.getByAltText('batu')).toBeInTheDocument();
  expect(screen.getByAltText('gunting')).toBeInTheDocument();
  expect(screen.getByAltText('kertas')).toBeInTheDocument();
});

test('renders ButtonYellow component with custom props and handle click event', () => {
  const handleClick = jest.fn();
  render(
    <ButtonYellow labelBtnYlw='Custom Label' handleClick={handleClick} type='submit' />,
  );

  const buttonElement = screen.getByRole('button');
  fireEvent.click(buttonElement);
  expect(handleClick).toHaveBeenCalled();

  const labelElement = screen.getByText('Custom Label');
  expect(labelElement).toBeInTheDocument();
});

// KURANG AXIOS HANDLING
