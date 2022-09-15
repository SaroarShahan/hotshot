import { RefObject, useEffect } from 'react';

import useEventListener from './useEventListener';

type Handler = (event: MouseEvent) => void;

const useOutsideClick = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: Handler,
  mouseEvent: 'mousedown' | 'mouseup' = 'mousedown'
): void => {
  useEventListener(mouseEvent, (evt) => {
    const el = ref?.current;

    if (!el || el.contains(evt.target as Node)) {
      return;
    }

    handler(evt);
  });
};

export default useOutsideClick;
