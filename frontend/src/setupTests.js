import '@testing-library/jest-dom';

// JSDOM mock for IntersectionObserver (required by Framer Motion / useInView)
class MockIntersectionObserver {
  constructor(callback) {
    this.callback = callback;
  }
  observe() {}
  unobserve() {}
  disconnect() {}
}

globalThis.IntersectionObserver = MockIntersectionObserver;
window.IntersectionObserver = MockIntersectionObserver;

// JSDOM mock for window.scrollTo / Element.prototype.scrollIntoView
if (!window.HTMLElement.prototype.scrollIntoView) {
  window.HTMLElement.prototype.scrollIntoView = () => {};
}
