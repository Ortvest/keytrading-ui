import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Text } from '@chakra-ui/react';

export const OrSeparator = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" width="344px" height="20px" mt={6}>
      <Breadcrumb separator="">
        <BreadcrumbItem>
          <BreadcrumbLink
            aria-hidden="true"
            style={{
              display: 'block',
              width: '148.5px',
              borderBottom: '1px solid rgba(19, 19, 55, 0.12)',
            }}
          />
        </BreadcrumbItem>

        <BreadcrumbItem>
          <Text
            fontSize="16px"
            fontWeight="500"
            lineHeight="124%"
            color="rgba(19, 19, 55, 0.32)"
            textAlign="center"
            fontFamily="'Inter', sans-serif">
            OR
          </Text>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink
            aria-hidden="true"
            style={{
              display: 'block',
              width: '148.5px',
              borderBottom: '1px solid rgba(19, 19, 55, 0.12)',
            }}
          />
        </BreadcrumbItem>
      </Breadcrumb>
    </Box>
  );
};
