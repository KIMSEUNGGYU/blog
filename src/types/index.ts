export type MultiSelectType = {
  type: 'multi_select';
  multi_select: {
    options: Array<{
      name: string;
      id?: string;
      color?: string;
    }>;
  };
  id: string;
  name: string;
};

export type Tag = {
  id: string;
  name: string;
  color?: string;
};

export type Post = {
  id: string;
  title: string;
  description: string;
  tags: Tag[];
  createdTime: string;
};
