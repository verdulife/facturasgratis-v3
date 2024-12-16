import { browser } from "$app/environment";
import { writable } from "svelte/store";

const localSellerStore = localStorage.getItem("SellersStore") || "";
export const SellersStore = writable((browser && JSON.parse(localSellerStore)) || []);
SellersStore.subscribe((value) => browser && (localStorage.SellersStore = JSON.stringify(value)));