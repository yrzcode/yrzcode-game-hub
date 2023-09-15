import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

const SortSelector = () => {
  const sortList = Array.from('1234');
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: Relevance
      </MenuButton>
      <MenuList>
        {sortList.map((sort) => {
          return (
            <>
              <MenuItem onClick={() => {}} key={sort}>
                Order by {sort}
              </MenuItem>
            </>
          );
        })}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
