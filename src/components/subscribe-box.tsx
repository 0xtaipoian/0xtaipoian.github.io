import { Input } from '@rebass/forms';
import React from 'react';
import { Box, Button, Flex } from 'rebass/styled-components';

export const SubscribeBox = () => (
  <div>
    <form
      action="https://github.us1.list-manage.com/subscribe/post?u=bc0d458fc5d2b0a9fde01cfad&amp;id=1222814d86"
      className="validate"
      id="mc-embedded-subscribe-form"
      method="post"
      name="mc-embedded-subscribe-form"
      noValidate
      target="_blank"
    >
      <Flex flexWrap="wrap">
        <Box p={2} width="calc(100% - 128px)">
          <Input
            className="email"
            defaultValue=""
            id="mce-EMAIL"
            name="EMAIL"
            placeholder="email address"
            required
            type="email"
          />
        </Box>
        <Box aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
          <Input
            defaultValue=""
            name="b_bc0d458fc5d2b0a9fde01cfad_1222814d86"
            tab-index="-1"
            type="text"
          />
        </Box>
        <Box p={2} width="128px">
          <Button height="38px" name="subscribe" type="submit" variant="secondary" width={[1]}>
            Subscribe
          </Button>
        </Box>
      </Flex>
    </form>
  </div>
);
