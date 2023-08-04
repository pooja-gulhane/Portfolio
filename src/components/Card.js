import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      borderRadius="10px"
      backgroundColor="white"
      alignItems="start"
      spacing={4}
    >
      {/* Project Image */}
      <Image src={imageSrc} alt={title} width="600px" height="300px" borderRadius="10px" objectFit="cover" />

      {/* Project Details */}
      <VStack alignItems="start" spacing={2} padding={4}>
        {/* Project Title */}
        <Heading as="h2" size="md" color="black">
          {title}
        </Heading>

        {/* Project Description */}
        <Text style={{color:"grey"}}>{description}</Text>

        {/* Learn More Link */}
        <HStack color="black">
          <Text size="sm">See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
