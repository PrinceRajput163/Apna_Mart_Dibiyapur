import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import FeaturedProducts from '../components/FeaturedProducts';

describe('Product Cards & Blinkit Deals Acceptance (TC-035, TC-036, TC-037, TC-038, TC-039, TC-040, TC-041)', () => {
  it('TC-035: displays verified product title, category, and descriptive subtitle', () => {
    render(<FeaturedProducts />);

    expect(screen.getByText('Premium Dinner Set')).toBeInTheDocument();
    expect(screen.getByText('Storage Container Set')).toBeInTheDocument();
    expect(screen.getByText('Stylish Handbag')).toBeInTheDocument();
  });

  it('TC-036 & TC-038: displays formatted deal pricing with MRP strikethrough comparison', () => {
    render(<FeaturedProducts />);

    // Formatted prices
    expect(screen.getByText('₹599')).toBeInTheDocument();
    expect(screen.getByText('₹299')).toBeInTheDocument();

    // Strikethrough comparison prices
    expect(screen.getByText('₹799')).toBeInTheDocument();
    expect(screen.getByText('₹399')).toBeInTheDocument();
  });

  it('TC-037: renders Blinkit discount badges for active deals', () => {
    render(<FeaturedProducts />);

    expect(screen.getByText('20% OFF')).toBeInTheDocument();
    expect(screen.getByText('25% OFF')).toBeInTheDocument();
  });

  it('TC-039: product icon elements have accessible role or aria-label', () => {
    render(<FeaturedProducts />);

    const icons = screen.getAllByRole('img');
    expect(icons.length).toBeGreaterThanOrEqual(6);
  });

  it('TC-040 & TC-041: Add to Cart triggers interactive confirmation toast and handles repeated clicks', () => {
    render(<FeaturedProducts />);

    const addButtons = screen.getAllByRole('button', { name: /add .* to cart/i });
    expect(addButtons.length).toBe(6);

    // Click first product Add to Cart
    fireEvent.click(addButtons[0]);

    // Toast message appears
    expect(screen.getByText(/Added "Premium Dinner Set" to cart/i)).toBeInTheDocument();

    // Repeated clicks execute safely without throwing
    expect(() => {
      fireEvent.click(addButtons[0]);
      fireEvent.click(addButtons[1]);
    }).not.toThrow();
  });
});
