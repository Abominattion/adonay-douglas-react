class IntersectionObserverMock {
  constructor(callback, options) {
    this.callback = callback;
    this.options = options;
  }

  observe(target) {
    this.callback(
      [{ isIntersecting: true, intersectionRatio: 1, target }],
      this
    );
  }

  unobserve() {}
  disconnect() {}
}

// eslint-disable-next-line no-undef
global.IntersectionObserver = IntersectionObserverMock;
