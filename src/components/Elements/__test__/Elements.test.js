import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import AuthBg from '../AuthBg';
import NavbarButton from '../NavbarButton';
import { BrowserRouter } from 'react-router-dom';
import AuthBox from '../AuthBox';
import AuthInput from '../AuthInput';
import FormLogin from '../AuthText';
import AuthTitle from '../AuthTitle';
import Gap from '../Gap';
import Title from '../Title';
import TitleBoxGame from '../TitleBoxGame';
import TitleHistProf from '../TitleHistProf';
import TextOnCreateRoom from '../TextOnCreateRoom';
import Image from '../Image';
import BackButton from '../BackButton';
import ButtonGreen from '../ButtonGreen';
import Background from '../Background';
import ButtonYellow from '../ButtonYellow';
import BoxProfile from '../BoxProfile';
import BoxGameHistory from '../BoxGameHistory';

test('renders children and background image', () => {
  render(<AuthBg />);
  const element = screen.getByTestId('auth-bg');
  expect(element).toBeInTheDocument();

  const childElement = screen.getByText('AuthBg');
  expect(childElement).toBeInTheDocument();
});

test('renders children and background box', () => {
  render(<AuthBox />);
  const element = screen.getByTestId('auth-box');
  expect(element).toBeInTheDocument();

  const childElement = screen.getByText('AuthBox');
  expect(childElement).toBeInTheDocument();
});

test('renders title', () => {
  render(<Gap />);

  const whElement = screen.getByTestId('wh-element');
  expect(whElement).toBeInTheDocument();
});

test('should renders image on certain page', () => {
  render(<Image />);

  const imageElement = screen.getByTestId('image-element');
  expect(imageElement).toBeInTheDocument();

  const imageAltElement = screen.getByAltText('defaultImageAlt');
  expect(imageAltElement).toBeInTheDocument();
});

test('renders NavbarButton component with default props', () => {
  render(
    <BrowserRouter>
      <NavbarButton />
    </BrowserRouter>,
  );

  const iconElement = screen.getByAltText('defaultAlt');
  expect(iconElement).toBeInTheDocument();

  const textElement = screen.getByText('Profile');
  expect(textElement).toBeInTheDocument();

  const linkElement = screen.getByRole('link', { href: '/dashboard/game-history' });
  expect(linkElement).toBeInTheDocument();

  const element = screen.getByTestId('img-element');
  expect(element).toBeInTheDocument();
});

test('renders text for create room page', () => {
  render(<TextOnCreateRoom />);

  const TextElement = screen.getByText('defaultText');
  expect(TextElement).toBeInTheDocument();
});

test('renders title for page', () => {
  render(<Title />);

  const TitleElement = screen.getByText('defaultTitleName');
  expect(TitleElement).toBeInTheDocument();
});

test('renders title for history', () => {
  render(<TitleBoxGame />);

  const TitleBoxElement = screen.getByText('defaultLabelBoxTitle');
  expect(TitleBoxElement).toBeInTheDocument();
});

test('renders title for profile', () => {
  render(<TitleHistProf />);

  const BoxTitleElement = screen.getByText('defaultBoxTitle');
  expect(BoxTitleElement).toBeInTheDocument();
});

test('renders AuthInput component with default props', () => {
  render(<AuthInput />);

  const iconElement = screen.getByTestId('icon-element');
  expect(iconElement).toBeInTheDocument();

  const inputElement = screen.getByPlaceholderText('Enter something');
  expect(inputElement).toBeInTheDocument();

  const nameAttribute = inputElement.getAttribute('name');
  expect(nameAttribute).toBe('myInput');
});

test('renders AuthInput component with custom props', () => {
  render(
    <AuthInput
      iconProp='custom-icon.png'
      typeProp='password'
      placeHolderProp='Custom Placeholder'
      name='customInput'
      handleChange={() => {}}
    />,
  );

  const iconElement = screen.getByTestId('icon-element');
  expect(iconElement).toHaveAttribute('src', 'custom-icon.png');

  const inputElement = screen.getByPlaceholderText('Custom Placeholder');
  expect(inputElement).toBeInTheDocument();
  expect(inputElement).toHaveAttribute('type', 'password');
  expect(inputElement).toHaveAttribute('name', 'customInput');

  const newValue = 'New Value';
  fireEvent.change(inputElement, { target: { value: newValue } });

  expect(inputElement.value).toBe(newValue);
});

test('renders FormLogin component with default props', () => {
  render(
    <BrowserRouter>
      <FormLogin />
    </BrowserRouter>,
  );

  const frontTextElement = screen.getByText('Default Front Text');
  expect(frontTextElement).toBeInTheDocument();

  const backTextElement = screen.getByText('Default Back Text');
  expect(backTextElement).toBeInTheDocument();

  const linkElement = screen.getByRole('link', { name: 'Default Back Text' });
  expect(linkElement).toHaveAttribute('href', '/default-link');
});

test('renders FormLogin component with custom props', () => {
  render(
    <BrowserRouter>
      <FormLogin
        frontTextProp='Custom Front Text'
        backTextProp='Custom Back Text'
        linkProp='/custom-link'
      />
    </BrowserRouter>,
  );

  const frontTextElement = screen.getByText('Custom Front Text');
  expect(frontTextElement).toBeInTheDocument();

  const backTextElement = screen.getByText('Custom Back Text');
  expect(backTextElement).toBeInTheDocument();

  const linkElement = screen.getByRole('link', { name: 'Custom Back Text' });
  expect(linkElement).toHaveAttribute('href', '/custom-link');
});

test('renders AuthTitle component with default prop', () => {
  render(<AuthTitle />);
  const defaultTitle = screen.getByText('Title');
  expect(defaultTitle).toBeInTheDocument();
});

test('renders AuthTitle component with custom prop', () => {
  const customTitle = 'Custom Title';
  render(<AuthTitle title={customTitle} />);
  const titleElement = screen.getByText(customTitle);
  expect(titleElement).toBeInTheDocument();
});

test('should render BackButton component', () => {
  render(
    <BrowserRouter>
      <BackButton />
    </BrowserRouter>,
  );

  const element = screen.getByTestId('img-icon-element');
  expect(element).toBeInTheDocument();
  expect(screen.getByText('Back')).toBeInTheDocument();
});

test('should navigate to the link when clicked', () => {
  render(
    <BrowserRouter>
      <BackButton linkProp='/some-route' />
    </BrowserRouter>,
  );

  const linkElement = screen.getByRole('link', { href: '/some-route' });
  expect(linkElement).toBeInTheDocument();
  const element = screen.getByTestId('img-icon-element');
  expect(element).toBeInTheDocument();
});

test('renders ButtonGreen component with default props', () => {
  render(<ButtonGreen />);

  const buttonElement = screen.getByRole('button');
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement.type).toBe('button');

  const labelElement = screen.getByText('Submit');
  expect(labelElement).toBeInTheDocument();
});

test('renders ButtonGreen component with custom props', () => {
  const customLabel = 'Click Me';
  render(<ButtonGreen labelBtnGrn={customLabel} type='submit' />);

  const buttonElement = screen.getByRole('button');
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement.type).toBe('submit');

  const labelElement = screen.getByText(customLabel);
  expect(labelElement).toBeInTheDocument();
});

test('triggers handleClick when clicked', () => {
  const handleClick = jest.fn();
  render(<ButtonGreen handleClick={handleClick} />);

  const buttonElement = screen.getByRole('button');
  fireEvent.click(buttonElement);

  expect(handleClick).toHaveBeenCalledTimes(1);
});

test('renders the correct images', () => {
  render(<ButtonGreen />);

  const images = screen.getByTestId('button-back');
  expect(images).toBeInTheDocument();
});

test('renders Background component without children', () => {
  render(<Background />);

  const backgroundElement = screen.getByTestId('bg-element');
  expect(backgroundElement).toBeInTheDocument();
  expect(backgroundElement.children.length).toBe(0);
});

test('renders Background component with children', () => {
  render(
    <Background>
      <div>Child Content</div>
    </Background>,
  );

  const backgroundElement = screen.getByTestId('bg-element');
  expect(backgroundElement).toBeInTheDocument();

  const childElement = screen.getByText('Child Content');
  expect(childElement).toBeInTheDocument();
});

test('renders BoxGameHistory component without children', () => {
  render(<BoxGameHistory />);

  const imgElement = screen.getByAltText('box');
  expect(imgElement).toBeInTheDocument();
});

test('renders BoxGameHistory component with children', () => {
  render(
    <BoxGameHistory>
      <div>Child Content</div>
    </BoxGameHistory>,
  );

  const childElement = screen.getByText('Child Content');
  expect(childElement).toBeInTheDocument();
});

test('renders BoxProfile component without children', () => {
  render(<BoxProfile />);

  const imgElement = screen.getByAltText('box');
  expect(imgElement).toBeInTheDocument();
});

test('renders BoxProfile component with children', () => {
  render(
    <BoxProfile>
      <div>Child Content</div>
    </BoxProfile>,
  );

  const childElement = screen.getByText('Child Content');
  expect(childElement).toBeInTheDocument();
});

test('renders ButtonYellow component with default props', () => {
  render(<ButtonYellow />);

  const buttonElement = screen.getByRole('button');
  expect(buttonElement).toBeInTheDocument();

  const labelElement = screen.getByText('Click Me');
  expect(labelElement).toBeInTheDocument();
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
