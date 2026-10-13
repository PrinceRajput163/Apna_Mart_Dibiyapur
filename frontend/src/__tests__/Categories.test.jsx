import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Categories from '../components/Categories';

describe('Categories Section Acceptance (TC-023, TC-024, TC-025, TC-028)', () => {
  it('TC-023: renders all 7 approved owner categories', () => {
    render(<Categories />);

    const expectedCategories = [
      'Crockery',
      'Plastic & Storage',
      'Bags & Accessories',
      'Cleaning & Home',
      'Gift Items',
      'Backpacks & More',
      'Kitchen Essentials',
    ];

    expectedCategories.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });

  it('TC-024: ensures category icons/emojis have accessible roles or visual presence', () => {
    render(<Categories />);

    const emojiIcons = screen.getAllByRole('img');
    expect(emojiIcons.length).toBe(7);
  });

  it('TC-025 & TC-028: category items link to the featured/catalogue destination', () => {
    render(<Categories />);

    const categoryLinks = screen.getAllByRole('link');
    expect(categoryLinks.length).toBeGreaterThanOrEqual(7);

    categoryLinks.forEach((link) => {
      expect(link).toHaveAttribute('href', '#featured');
    });
  });
});
