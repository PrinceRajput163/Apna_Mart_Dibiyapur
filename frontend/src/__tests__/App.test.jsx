import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App Root Integration & Hierarchy (TC-004, TC-006, TC-064, TC-069, TC-073)', () => {
  it('TC-004 & TC-006: mounts and renders the core homepage sections', () => {
    const { container } = render(<App />);
    expect(container).toBeInTheDocument();

    // Verify main navigation landmark
    expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument();

    // Verify main content landmark exists
    const main = container.querySelector('main');
    expect(main).toBeInTheDocument();

    // Verify footer landmark exists
    const footer = container.querySelector('footer');
    expect(footer).toBeInTheDocument();
  });

  it('TC-064: applies padding-bottom on mobile to prevent bottom navigation overlap', () => {
    const { container } = render(<App />);
    const rootDiv = container.firstChild;
    expect(rootDiv).toHaveClass('pb-16');
    expect(rootDiv).toHaveClass('md:pb-0');
  });

  it('TC-069: sets overflow-x-hidden on the root container to prevent horizontal scroll spill', () => {
    const { container } = render(<App />);
    const rootDiv = container.firstChild;
    expect(rootDiv).toHaveClass('overflow-x-hidden');
  });

  it('TC-073: maintains logical reading hierarchy for homepage sections', () => {
    const { container } = render(<App />);
    const main = container.querySelector('main');
    const sections = Array.from(main.children).map((el) => el.id || el.tagName.toLowerCase());

    // Expect hero (#home), categories (#categories), benefits, and featured (#featured) in order
    expect(sections[0]).toBe('home');
    expect(sections[1]).toBe('categories');
    expect(sections[3]).toBe('featured');
  });
});
