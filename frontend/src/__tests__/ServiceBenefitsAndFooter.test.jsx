import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ServiceBenefits from '../components/ServiceBenefits';
import ContactCTA from '../components/ContactCTA';
import Footer from '../components/Footer';

describe('Service Benefits, Contact & Footer Acceptance (TC-052, TC-053, TC-054, TC-055, TC-057)', () => {
  it('TC-052: service benefits display verifiable physical store highlights', () => {
    render(<ServiceBenefits />);

    expect(screen.getByText('Physical Store in Dibiyapur')).toBeInTheDocument();
    expect(screen.getByText('100% Genuine Quality')).toBeInTheDocument();
    expect(screen.getByText('Easy Counter Pickup')).toBeInTheDocument();
    expect(screen.getByText('Friendly Local Support')).toBeInTheDocument();
  });

  it('TC-053: footer displays approved brand name and tagline', () => {
    render(<Footer />);

    expect(screen.getByText(/APNA MART DIBIYAPUR/i)).toBeInTheDocument();
    expect(screen.getByText(/हर ज़रूरत, एक ही जगह।/i)).toBeInTheDocument();
  });

  it('TC-054 & TC-055: verified address and working tel: contact numbers', () => {
    render(<ContactCTA />);

    // Verify phone numbers in document
    expect(screen.getByText(/9756595920/)).toBeInTheDocument();
    expect(screen.getByText(/9528869946/)).toBeInTheDocument();
    expect(screen.getByText(/7500781379/)).toBeInTheDocument();

    // Verify tel: links
    const telLinks = screen.getAllByRole('link', { name: /call/i });
    expect(telLinks.length).toBeGreaterThanOrEqual(1);

    const hrefs = telLinks.map((l) => l.getAttribute('href'));
    expect(hrefs.some((h) => h?.startsWith('tel:'))).toBe(true);
  });

  it('TC-057: store directions use a valid map search link without fabricated coordinates', () => {
    render(<ContactCTA />);

    const mapLink = screen.getByRole('link', { name: /get directions/i });
    expect(mapLink).toHaveAttribute('href');
    const href = mapLink.getAttribute('href') || '';
    expect(href).toContain('google.com/maps/search');
    expect(href).toContain('Dibiyapur');
  });
});
