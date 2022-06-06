import { useSelector, useDispatch } from 'react-redux';

import { Tag } from '@/src/types';

import { setSelectedTag } from '@/src/modules/slice';

import { RootState } from '@/src/modules/store';

import Tags from '@/src/components/Tags';

type Props = {
  tags: Tag[];
};

export default function TagsContainer({ tags }: Props) {
  const dispatch = useDispatch();

  const { selectedTag } = useSelector((state: RootState) => state);

  const handleClickSelectedTag = (tagName: string) => {
    dispatch(setSelectedTag(tagName));
  };

  return (
    <Tags
      tags={tags} //
      selectedTag={selectedTag}
      onClick={handleClickSelectedTag}
    />
  );
}
