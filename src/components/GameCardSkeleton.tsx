import {
  Card,
  CardBody,
  Skeleton,
  SkeletonText,
  Stack,
} from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card width="300px" height="320px" borderRadius={10} overflow="hidden">
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
  );
};

export default GameCardSkeleton;
