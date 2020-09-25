import logger from './logger';

const debug = logger('quill:utils');

export const getContext = (rootEle) => {
  // const supportsShadowDOM = !!HTMLElement.prototype.attachShadow;
  const ctx = rootEle.getRootNode() || document;
  return ctx;
};

export const isInShadowRoot = (rootEle) => {
  const ctx = getContext(rootEle);
  const isTrue = 'host' in ctx && 'shadowRoot' in ctx.host;
  debug.info('isInShadowRoot', isTrue);
  return isTrue;
};
