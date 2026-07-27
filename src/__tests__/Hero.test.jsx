import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Hero from '../components/Hero';

describe('Hero Component', () => {
  it('renders developer name', () => {
    render(<Hero />);
    expect(screen.getByText('Rutuj Dhawale')).toBeInTheDocument();
  });

  it('renders CTA navigation buttons', () => {
    render(<Hero />);
    expect(screen.getByText('View Work')).toBeInTheDocument();
    expect(screen.getByText('Get in Touch')).toBeInTheDocument();
  });
});
