import { StateCreator } from 'zustand';

export type FeaturesStateType = {
  categories: any;
  setCategories: (arg: any) => void;
  subcategories: any;
  setSubcategories: (arg: any) => void;
  isLoading: boolean;
  setLoading: (arg: boolean) => void;
  editUser: any;
  setEditUser: (arg: any) => void;
  setAllUsers: (arg: any) => void;
  allUsers: any;
};

const featuresSlice: StateCreator<FeaturesStateType, [['zustand/devtools', never]], []> = (
  set,
) => ({
  categories: [],
  subcategories: [],
  isLoading: false,
  editUser: {},
  allUsers: [],
  setAllUsers: (arg) => {
    set({ allUsers: arg });
  },
  setEditUser: (arg) => {
    set({ editUser: arg });
  },
  setLoading: (arg) => {
    set({ isLoading: arg });
  },
  setSubcategories: (arg) => {
    set({ subcategories: arg });
  },
  setCategories: (arg) => {
    set({ categories: arg });
  },
});

export default featuresSlice;
