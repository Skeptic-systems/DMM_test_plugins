import ar from "./locales/ar/translation.json";
import de from "./locales/de/translation.json";
import en from "./locales/en/translation.json";
import fr from "./locales/fr/translation.json";
import gsw from "./locales/gsw/translation.json";
import pl from "./locales/pl/translation.json";
import ru from "./locales/ru/translation.json";
import tr from "./locales/tr/translation.json";
import zhCN from "./locales/zh-CN/translation.json";

const NAMESPACE = "background";

export const locals = {
  ar: { [NAMESPACE]: ar },
  de: { [NAMESPACE]: de },
  en: { [NAMESPACE]: en },
  fr: { [NAMESPACE]: fr },
  gsw: { [NAMESPACE]: gsw },
  pl: { [NAMESPACE]: pl },
  ru: { [NAMESPACE]: ru },
  tr: { [NAMESPACE]: tr },
  "zh-CN": { [NAMESPACE]: zhCN },
};

export default locals;


