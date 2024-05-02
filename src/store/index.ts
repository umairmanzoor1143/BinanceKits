import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { createSelectorHooks } from 'auto-zustand-selectors-hook';

interface IStore {
  user?: Partial<IUser>;
}
type IActionTypes = {
  setUser: (user: Partial<IUser>) => void;
  setPartialUser: (user: Partial<IUser>) => void;
  resetStore: () => void;
};
export const resetters: (() => void)[] = [];
const initialState: IStore | undefined = {
  user: undefined,
};
export const useStoreBase = create(
  devtools(
    immer<IStore & IActionTypes>((set, get) => {
      resetters.push(() => set(initialState));
      const store = {
        ...initialState,
        // ...createLayoutSlice(set, get),
        resetStore: () => {
          set(() => initialState);
        },
        setUser: (props: Partial<IUser>) => {
          set((state) => {
            state.user = props;
          });
        },
        setPartialUser: (props: Partial<IUser>) => {
          set((state) => {
            state.user = { ...state.user, ...props };
          });
        },
      };
      return store;
    }),
  ),
);
export const resetAllSlices = () => resetters.forEach((resetter) => resetter());
export const useStore = createSelectorHooks<IStore & IActionTypes>(useStoreBase);
