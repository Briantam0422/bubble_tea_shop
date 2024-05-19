import { configureStore } from '@reduxjs/toolkit'
import { shoppingCartReducer } from './shopping-cart/ShoppingCartSlice'
import { bubbleTeaReducer } from './bubble-tea/bubbleTeaListSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      bubbleTea: bubbleTeaReducer,
      shoppingCart: shoppingCartReducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }),
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

