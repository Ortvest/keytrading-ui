import { Sector } from '@shared/interfaces/Sector.interfaces';
import { sectorsMockData } from '@shared/mocks/Sectors.mocks';

import { Checkbox, CheckboxGroup, Grid } from '@chakra-ui/react';

export const SectorsSelection = () => {
  const onSectorsChangeHanlder = () => {
    console.log('Sector');
  };
  return (
    <CheckboxGroup onChange={onSectorsChangeHanlder}>
      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        {sectorsMockData.map((sector: Sector, index: number) => (
          <Checkbox key={index} value={sector.value}>
            {sector.name}
          </Checkbox>
        ))}
      </Grid>
    </CheckboxGroup>
  );
};
