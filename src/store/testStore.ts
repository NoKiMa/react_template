import {create} from 'zustand';
import {immer} from 'zustand/middleware/immer';
import {devtools} from 'zustand/middleware';

// Define the state interface
type State = {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
  updateBears: (newBears: number) => void;
};

// Zustand store with immer for immutability
const useStore = create<State>()(
  devtools(
    immer(set => ({
      bears: 0,

      // Logic to increase the population of bears
      increasePopulation: () =>
        set((state: State) => {
          state.bears += 1;
        }),

      // Logic to reset the bear count to 0
      removeAllBears: () =>
        set((state: State) => {
          state.bears = 0;
        }),

      // Logic to update bears with a new value
      updateBears: (newBears: number) =>
        set((state: State) => {
          state.bears = newBears;
        }),
    })),
  ),
);

export default useStore;
