import { ref } from 'vue';

const eventBus = ref(new Map());

export const useEventBus = () => {
  const emit = (event, data) => {
    const handlers = eventBus.value.get(event) || [];
    handlers.forEach((handler) => handler(data));
  };

  const on = (event, handler) => {
    const handlers = eventBus.value.get(event) || [];
    handlers.push(handler);
    eventBus.value.set(event, handlers);
  };

  const off = (event, handler) => {
    const handlers = eventBus.value.get(event) || [];
    const index = handlers.indexOf(handler);
    if (index !== -1) {
      handlers.splice(index, 1);
    }
  };

  return { emit, on, off };
};
