/**
 * Props for the Step component
 * @property isSelected  - is the step selected
 * @property isCompleted - is the step completed
 * @property number      - number of the step
 * @property description - step description
 */
export type StepProps = {
  isSelected: boolean;
  isCompleted: boolean;
  number: number;
  description: string;
};
