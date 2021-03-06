import { configureStore } from "@reduxjs/toolkit";
import { useDispatch,useSelector,TypedUseSelectorHook } from 'react-redux'
import userReducer from './slices/userSlice'
import categoryReducer from './slices/categorySlice'

const store = configureStore({
    reducer: {
        user:userReducer ,
        category:categoryReducer
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


export default store
