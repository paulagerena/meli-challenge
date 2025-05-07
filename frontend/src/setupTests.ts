import { vi, afterEach, beforeEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

beforeEach(() => {
  vi.mocked('axios', true);
  vi.mocked('react-router', true);
});

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});
