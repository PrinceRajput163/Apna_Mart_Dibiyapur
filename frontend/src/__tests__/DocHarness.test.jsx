import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';

describe('Documentation Harness & Consistency (TC-094 to TC-102)', () => {
  const rootDir = path.resolve(process.cwd(), '..');

  const requiredDocs = [
    'AGENTS.md',
    'PROJECT_CONTEXT.md',
    'REQUIREMENTS.md',
    'ARCHITECTURE.md',
    'IMPLEMENTATION_PLAN.md',
    'PROGRESS.md',
    'DECISIONS.md',
    'PROJECT_RULES.md',
    'PROJECT_STATUS.md',
    'ROADMAP.md',
    'README.md',
  ];

  it('TC-094 to TC-100: all canonical project documentation files exist and are populated', () => {
    requiredDocs.forEach((docFile) => {
      const fullPath = path.join(rootDir, docFile);
      expect(fs.existsSync(fullPath), `Expected ${docFile} to exist in project root`).toBe(true);
      const stat = fs.statSync(fullPath);
      expect(stat.size).toBeGreaterThan(100);
    });
  });

  it('TC-101: verified business facts are consistent across all core documentation', () => {
    const contextContent = fs.readFileSync(path.join(rootDir, 'PROJECT_CONTEXT.md'), 'utf-8');
    const decisionsContent = fs.readFileSync(path.join(rootDir, 'DECISIONS.md'), 'utf-8');

    // Verify Owner Name
    expect(contextContent).toContain('Shyam Sundar Rajput');
    expect(decisionsContent).toContain('Shyam Sundar Rajput');

    // Verify Verified Town & Address
    expect(contextContent).toContain('Dibiyapur');
    expect(contextContent).toContain('Phaphund Road');
    expect(contextContent).toContain('206244');

    // Verify Phone Numbers
    expect(contextContent).toContain('9756595920');
    expect(contextContent).toContain('9528869946');
    expect(contextContent).toContain('7500781379');
  });
});
