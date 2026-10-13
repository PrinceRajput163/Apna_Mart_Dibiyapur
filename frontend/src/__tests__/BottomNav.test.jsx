import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import BottomNav from '../components/BottomNav';

describe('Mobile Bottom Navigation Acceptance (TC-058, TC-059, TC-060, TC-061, TC-062, TC-063, TC-066)', () => {
  it('TC-058 to TC-062: renders all 5 mobile bottom navigation destinations', () => {
    render(<BottomNav />);

    const homeLink = screen.getByRole('link', { name: /^home$/i });
    const catLink = screen.getByRole('link', { name: /^categories$/i });
    const offersLink = screen.getByRole('link', { name: /offers/i });
    const wishlistLink = screen.getByRole('link', { name: /^wishlist$/i });
    const accountLink = screen.getByRole('link', { name: /^account$/i });

    expect(homeLink).toHaveAttribute('href', '#home');
    expect(catLink).toHaveAttribute('href', '#categories');
    expect(offersLink).toHaveAttribute('href', '#featured');
    expect(wishlistLink).toHaveAttribute('href', '#featured');
    expect(accountLink).toHaveAttribute('href', '#contact');
  });

  it('TC-063: clicking a destination updates the active tab styling', () => {
    render(<BottomNav />);

    const catLink = screen.getByRole('link', { name: /^categories$/i });
    fireEvent.click(catLink);

    expect(catLink).toHaveClass('text-burgundy-900');
  });

  it('TC-066: hides bottom navigation on desktop viewports via md:hidden', () => {
    const { container } = render(<BottomNav />);
    const nav = container.querySelector('nav');
    expect(nav).toHaveClass('md:hidden');
  });
});
