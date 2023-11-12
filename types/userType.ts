type User = {
      _id: string;
      name: string;
      username: string;
      userId: string;
      email: string;
      image: string;
      modules: any[]; // You can replace 'any' with the actual type for modules if you have that information.
      likes: any[];   // Same here, replace 'any' with the actual type for likes.
      __v: number;
};