import { Column , Text} from 'components';
import React from 'react';

export type ListItemProps={
  label: string;
};

export const ListItem: React.FC<ListItemProps> = ({label}) =>{
  return(
    <Column width="93%" bg="rgba(0,0,0,0.2)" p="20px" mb="10px" borderRadius="4px" borderLeft="5px solid #fff">
    <Text>{label}</Text>
    </Column>
  );
};