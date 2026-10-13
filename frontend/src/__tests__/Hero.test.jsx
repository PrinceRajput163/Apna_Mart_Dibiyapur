import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Hero from '../components/Hero';

describe('Hero Banner Acceptance (TC-029, TC-030, TC-034)', () => {
  it('TC-029: renders display headline, bilingual tagline, and primary CTA', () => {
    render(<Hero />);

    // Display headline
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Elevate Your Home with Everyday/i);

    // Bilingual tagline
    expect(screen.getByText(/हर ज़रूरत, एक ही जगह।/i)).toBeInTheDocument();

    // Primary CTA button
    expect(screen.getByRole('link', { name: /shop categories/i })).toBeInTheDocument();
  });

  it('TC-030: shop now action points to valid catalogue destination (#categories)', () => {
    render(<Hero />);

    const ctaLink = screen.getByRole('link', { name: /shop categories/i });
    expect(ctaLink).toHaveAttribute('href', '#categories');
  });

  it('TC-034: contains zero fabricated promotional countdowns or false clearance claims', () => {
    const { container } = render(<Hero />);
    const textContent = container.textContent || '';

    // Verify absence of fabricated claims
    expect(textContent).not.toMatch(/90% OFF/i);
    expect(textContent).not.toMatch(/Sale Ends In/i);
    expect(textContent).not.toMatch(/Only \d+ left in stock/i);
  });
});
