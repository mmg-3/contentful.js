import { Locale } from './locale'
import { BaseSys } from './sys'

export interface SpaceSys extends BaseSys {
  type: 'Space'
}

export interface Space {
  sys: SpaceSys
  name: string
  locales: Array<Omit<Locale, 'sys'>>
}