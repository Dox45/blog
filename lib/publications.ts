export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  date: string;
  type: 'journal' | 'preprint' | 'conference' | 'talk';
  abstract: string;
  tags: string[];
  pdfUrl?: string;
  codeUrl?: string;
  doiUrl?: string;
  bibtex: string;
}

export const PUBLICATIONS: Publication[] = [];
