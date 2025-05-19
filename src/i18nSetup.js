import { i18n } from "@lingui/core";
import { messages } from "./locales/en/messages";
import { messages as messagesDa } from "./locales/da/messages";
import { messages as messagesDe } from "./locales/de/messages";

export function loadAllLocales() {
    i18n.load("en", messages);
    i18n.load("de", messagesDe);
    i18n.load("da", messagesDa);
    i18n.activate("de");
}
