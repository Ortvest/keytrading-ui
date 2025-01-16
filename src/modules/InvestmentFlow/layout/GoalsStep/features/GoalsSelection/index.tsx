import { Goal } from '@shared/interfaces/Goal.interface';
import { goalsMockData } from '@shared/mocks/Goals.mocks';

import { Checkbox, CheckboxGroup, Grid } from '@chakra-ui/react';

interface GoalsSelectionProps {
  onGoalsChange: (selectedGoals: string[]) => void;
}

export const GoalsSelection = ({ onGoalsChange }: GoalsSelectionProps) => {
  return (
    <CheckboxGroup onChange={onGoalsChange}>
      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        {goalsMockData.map((goal: Goal) => (
          <Checkbox key={goal.value} value={goal.value}>
            {goal.name}
          </Checkbox>
        ))}
      </Grid>
    </CheckboxGroup>
  );
};
