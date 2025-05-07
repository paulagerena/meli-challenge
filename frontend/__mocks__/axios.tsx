import { vi } from 'vitest';

const mocks = vi.hoisted(() => ({
  create: vi.fn().mockImplementation(() => ({
    get: vi.fn(),
    post: vi.fn(),
    put: vi.fn(),
    delete: vi.fn()
  }))
  // and any other request type you want to mock
}));

vi.mock('axios', async (importActual) => {
  const actual = await importActual<typeof import('axios')>();

  const mockAxios = {
    default: {
      ...actual.default,
      create: mocks.create
    }
  };

  return mockAxios;
});
