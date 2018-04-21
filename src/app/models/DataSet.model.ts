import { Language } from './language.model';

export interface DataSet {
  id: string,
  name: string,
  languages: Language[]
}
