import { create } from "zustand";

const useFavoritosStore = create((set) => ({
  favoritos: [],

  adicionarAosFavoritos: (cachorro) =>
    set((state) => {
      const jaAdicionado = state.favoritos.some((c) => c.id === cachorro.id);

      if (jaAdicionado) return state;

      return { favoritos: [...state.favoritos, cachorro] };
    }),

  removerFavorito: (id) =>
    set((state) => ({
      favoritos: state.favoritos.filter((c) => c.id !== id),
    })),
}));

export default useFavoritosStore;
