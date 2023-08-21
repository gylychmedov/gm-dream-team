import { ILang } from "./ILang";

export interface IDocument {
  id: 1;
  title: ILang;
  description: ILang;
  document: string;
  locale: "RU" | "EN";
  coures_title: ILang;
  created_at: string;
  video_id: number;
}
