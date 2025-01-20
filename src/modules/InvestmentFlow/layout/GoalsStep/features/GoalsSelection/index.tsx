import { Goal } from '@shared/interfaces/Goal.interfaces';
import { goalsMockData } from '@shared/mocks/Goals.mocks';

import { Checkbox, CheckboxGroup, Grid } from '@chakra-ui/react';

export const GoalsSelection = () => {
  const onGoalsChangeHanlder = () => {
    console.log('Goal');
  };
  return (
    <CheckboxGroup onChange={onGoalsChangeHanlder}>
      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        {goalsMockData.map((goal: Goal, index: number) => (
          <Checkbox key={index} value={goal.value}>
            {goal.name}
          </Checkbox>
        ))}
      </Grid>
    </CheckboxGroup>
  );
};
