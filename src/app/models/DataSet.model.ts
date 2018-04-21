import { Language } from './language.model';

/**
 * DataSet Model
 */
export interface DataSet {
  id: string,
  name: string,
  languages: Language[]
}
