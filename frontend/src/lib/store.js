import { writable } from "svelte/store";

const persis_storage = (key, initValue) => {
    const storeValueStr = localStorage.getItem(key);
    const store = writable(storeValueStr != null ? JSON.parse(storeValueStr) : initValue);
    store.subscribe((val) => {
        localStorage.setItem(key, JSON.stringify(val));
    })
    return store;
}

export const page = persis_storage("page", 0)
export const keyword = persis_storage("keyword", "")
export const access_token = persis_storage("access_token", "")
export const username = persis_storage("username", "")
export const is_login = persis_storage("is_login", false)