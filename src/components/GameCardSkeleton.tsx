import {
  Card,
  CardBody,
  Skeleton,
  SkeletonText,
  Stack,
} from "@chakra-ui/react";
import GameCardContainer from "./GameCardContainer";

const GameCardSkeleton = () => {
  return (
    <GameCardContainer>
      <Card>
        <Stack>
          <Skeleton height="200px"></Skeleton>
          <SkeletonText
            mt="2"
            noOfLines={3}
            spacing="3"
            skeletonHeight="3"
            padding="10px"
          />
        </Stack>
      </Card>
    </GameCardContainer>
  );
};

export default GameCardSkeleton;
