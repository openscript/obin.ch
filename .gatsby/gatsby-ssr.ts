export { wrapPageElement } from './wrapPageElement';

if (!Intl.PluralRules) {
  require('@formatjs/intl-pluralrules/polyfill');
  require('@formatjs/intl-pluralrules/locale-data/de');
  require('@formatjs/intl-pluralrules/locale-data/en');
}

if (!Intl.RelativeTimeFormat) {
  require('@formatjs/intl-relativetimeformat/polyfill');
  require('@formatjs/intl-relativetimeformat/locale-data/de');
  require('@formatjs/intl-relativetimeformat/locale-data/en');
}
