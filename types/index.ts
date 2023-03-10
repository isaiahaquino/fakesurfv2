export type TApiAllCategoriesResp = {
  categories: {
      id: string;
      name: string;
      special: boolean;
      products: {
          title: string;
          description: string;
          image: string;
          price: string;
      }[];
  }[];
};

export type TApiSingleCategoryWithProductResp = {
  category: {
      id: string;
      name: string;
      products: {
          id: string;
          title: string;
          description: string;
          image: string;
          price: string;
          quantity: number;
      }[];
      hasMore: boolean;
  };
};

export type TApiSingleProductResp = {
  product: {
      title: string;
      description: string;
      price: string;
      quantity: number;
      image: string;
  };
};

export type TApiErrorResp = {
  message: string;
};

export type TSingleProduct = {
  title: string;
  description: string;
  price: string;
  quantity: number;
  image: string;
  id: string;
}

export type TMultipleProducts = {
  title: string;
  description: string;
  price: string;
  quantity: number;
  image: string;
  id: string;
}[];

export type TCategoriesWithProduct = {
  id: string;
  name: string;
  products: {
    id: string;
    title: string;
    description: string;
    image: string;
    price: string;
    quantity: number;
  }[];
}[];

export type TSearchedProducts = {
  searchData: {
    title: string;
    description: string;
    price: string;
    quantity: number;
    image: string;
    id: string;
  }[];
}


