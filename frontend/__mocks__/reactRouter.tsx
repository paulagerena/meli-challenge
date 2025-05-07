import { ReactNode } from 'react';
import { vi } from 'vitest';

const mocks = vi.hoisted(() => ({
  BrowserRouter: vi.fn(({ children }: { children: ReactNode }) => <>{children}</>),
  useNavigate: vi.fn(),
  useParams: vi.fn(),
  useLocation: vi.fn(),
  Link: vi.fn(({ children }: { children: ReactNode }) => <>{children}</>)
}));

vi.mock('react-router', async () => {
  const actual = await vi.importActual('react-router');
  return {
    ...actual,
    BrowserRouter: mocks.BrowserRouter,
    useNavigate: mocks.useNavigate,
    useParams: mocks.useParams,
    useLocation: mocks.useLocation,
    Link: mocks.Link
  };
});
