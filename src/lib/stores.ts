import { browser } from "$app/environment";
import { writable } from "svelte/store";

const localSellers = browser && localStorage.getItem("Sellers");
export const SellersStore = writable((JSON.parse(localSellers || "[]")));
SellersStore.subscribe((value) => browser && (localStorage.Sellers = JSON.stringify(value)));

const localInvoices = browser && localStorage.getItem("Invoices");
export const InvoicesStore = writable((JSON.parse(localInvoices || "[]")));
InvoicesStore.subscribe((value) => browser && (localStorage.Invoices = JSON.stringify(value)));

export const currentSellerStore = writable(0);