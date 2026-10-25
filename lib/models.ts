export interface OpenModel {
  name: string
  repo: string
  area: string
  summary: string
}

const HF = 'https://huggingface.co/Modularcomputing'

export const HF_ORG_URL = HF

export const OPEN_MODELS: OpenModel[] = [
  {
    name: 'Dynamic Accent',
    repo: `${HF}/dynamic-accent-preview`,
    area: 'Speech · TTS',
    summary:
      'Code-switching text-to-speech for English, Nigerian Pidgin, Igbo, Yoruba and Hausa, mixed inside one sentence in one consistent voice.',
  },
  {
    name: 'Dynamic Accent Pro v1.1',
    repo: `${HF}/dynamic-accent-pro-v1.1`,
    area: 'Speech · TTS',
    summary:
      'Experimental prompt-controlled version of Dynamic Accent: a plain-English style instruction steers pace and pausing.',
  },
  {
    name: 'Dynamic ASR',
    repo: `${HF}/dynamic-asr`,
    area: 'Speech · ASR',
    summary:
      'Speech recognition for Nigerian English, Pidgin, Igbo, Yoruba and Hausa, including speech that switches languages mid-sentence. A 1B-parameter fine-tune on 187 hours of licensed speech.',
  },
  {
    name: 'Dynamic Accent Duplex',
    repo: `${HF}/dynamic-accent-duplex`,
    area: 'Speech · Voice agent',
    summary:
      'Experimental full-duplex voice agent that answers in the same language mix you speak, built from permissively licensed components.',
  },
  {
    name: 'Native Bird',
    repo: `${HF}/Native-Bird`,
    area: 'NLP · Embeddings',
    summary: 'Sentence embedding model for Nigerian languages, for search, retrieval and similarity.',
  },
  {
    name: 'Native-Bird2',
    repo: `${HF}/Native-Bird2`,
    area: 'Multimodal · Retrieval',
    summary: 'Image–text retrieval for Igbo, Hausa, Yoruba and English in one shared embedding space.',
  },
  {
    name: 'AtlasVision',
    repo: `${HF}/AtlasVision`,
    area: 'Multimodal · VLM',
    summary:
      "Gives N-ATLaS, Nigeria's multilingual Llama-3-8B, the ability to see, via a SigLIP2 encoder and a trained projector.",
  },
  {
    name: 'Modular-TS-2.4M',
    repo: `${HF}/Modular-TS-2.4M`,
    area: 'Time series',
    summary:
      'A 2.4M-parameter time-series foundation model pretrained from scratch: zero-shot probabilistic forecasts that run on a CPU or phone.',
  },
  {
    name: 'StaMP',
    repo: `${HF}/StaMP`,
    area: 'Protein engineering',
    summary:
      'Fast structure-conditioned predictor of single-point mutation stability (ΔΔG); scans every substitution of a protein in seconds on CPU.',
  },
  {
    name: 'Polymorphic',
    repo: `${HF}/Polymorphic`,
    area: '3D vision',
    summary: 'Compute-efficient video-to-3D research combining AnySplat initialisation with Fourier Splatting.',
  },
]
