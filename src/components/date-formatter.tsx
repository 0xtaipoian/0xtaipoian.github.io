import { format, parseISO } from 'date-fns';
import React, { HTMLAttributes } from 'react';
import { Box, BoxProps, Text } from 'rebass/styled-components';

export interface DateFormatter
  extends BoxProps,
    Omit<HTMLAttributes<HTMLTimeElement & HTMLDivElement>, keyof BoxProps> {
  dateString: string;
}

export const DateFormatter: React.FC<DateFormatter> = ({ dateString, ...props }) => {
  const date = parseISO(dateString);

  return (
    <Box {...props}>
      <Text as="time" dateTime={dateString}>
        {format(date, 'LLLL	d, yyyy')}
      </Text>
    </Box>
  );
};
