import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '../components/Navbar';

describe('Navbar Brand & Header Acceptance (TC-009, TC-010, TC-012, TC-013, TC-014, TC-016, TC-017, TC-018, TC-021)', () => {
  it('TC-009 & TC-010: renders authentic brand emblem, title and tagline', () => {
    render(<Navbar />);

    // Brand emblem 'अ'
    expect(screen.getByText('अ')).toBeInTheDocument();

    // Brand title
    expect(screen.getByText('APNA MART')).toBeInTheDocument();
    expect(screen.getByText('Dibiyapur')).toBeInTheDocument();

    // Verified tagline
    expect(screen.getByText(/हर ज़रूरत, एक ही जगह/i)).toBeInTheDocument();
  });

  it('TC-012: has accessible names for interactive cart, wishlist, and drawer controls', () => {
    render(<Navbar />);

    expect(screen.getByRole('button', { name: /open mobile menu/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /wishlist/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /shopping cart/i })).toBeInTheDocument();
  });

  it('TC-013: cart badge reflects verified state (0 items) without fabricated counts', () => {
    render(<Navbar />);

    const cartLink = screen.getByRole('link', { name: /shopping cart/i });
    expect(cartLink).toHaveTextContent('0');
  });

  it('TC-014: displays verified physical store location excerpt in announcement bar', () => {
    render(<Navbar />);

    expect(screen.getByText(/Phaphund Road, Durga Nagar, Dibiyapur/i)).toBeInTheDocument();
  });

  it('TC-016 & TC-017: search inputs are accessible and update on typing', () => {
    render(<Navbar />);

    // Grab the desktop search input
    const inputs = screen.getAllByPlaceholderText(/search/i);
    expect(inputs.length).toBeGreaterThan(0);

    const desktopInput = inputs[0];
    fireEvent.change(desktopInput, { target: { value: 'crockery set' } });
    expect(desktopInput.value).toBe('crockery set');
  });

  it('TC-018 & TC-021: search handles spaces, punctuation and submit cleanly without error', () => {
    render(<Navbar />);

    const inputs = screen.getAllByPlaceholderText(/search/i);
    const input = inputs[0];

    // Special characters & mixed case
    fireEvent.change(input, { target: { value: 'BPA-Free Jars & Storage! #1' } });
    expect(input.value).toBe('BPA-Free Jars & Storage! #1');

    // Submit form
    const form = input.closest('form');
    expect(() => fireEvent.submit(form)).not.toThrow();
  });
});
