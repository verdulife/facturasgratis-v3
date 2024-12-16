import { browser } from "$app/environment";
import { writable } from "svelte/store";

const localSellerStore = browser && localStorage.getItem("SellersStore");
export const SellersStore = writable((JSON.parse(localSellerStore || "[]")));
SellersStore.subscribe((value) => browser && (localStorage.SellersStore = JSON.stringify(value)));