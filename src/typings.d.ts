interface CSSModule {
  [className: string]: string
}

declare module '*.scss'

// type shims for CSS modules
declare module '*.module.scss' {
  const cssModule: CSSModule
  export = cssModule
}

declare module '*.module.css' {
  const cssModule: CSSModule
  export = cssModuleYour turn
}

declare namespace Intl {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  class RelativeTimeFormat {
    constructor(locale: string);
  }
}
