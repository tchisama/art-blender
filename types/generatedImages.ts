export type ImageResult = {
    _id: string;
    results: {
      prompt: string;
      url: string;
      _id: string;
    }[];
    prompt: string;
    userId: string;
    model: string;
    size: string;
    n: number;
    dallev: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };