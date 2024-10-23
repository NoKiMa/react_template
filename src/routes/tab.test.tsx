import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import {describe, it, expect} from 'vitest';
import Tab from './tab';

describe('MyComponent', () => {
  it('renders correctly with initial props', () => {
    render(<Tab />); // Adjust the props passed to your component if needed
    expect(screen.getByText(/id/i)).toBeInTheDocument();
  });
});