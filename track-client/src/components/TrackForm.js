import React from 'react';
import { Input, Button } from 'react-native-elements';
import { Spacer, Horcen, HorCen } from './Spacer';

const TrackForm = () => {
  return (
    <>
      <Spacer>
        <Input placeholder="Enter Name" />
      </Spacer>
      <HorCen>
        <Button title="Start Recording" />
      </HorCen>
    </>
  );
};

export default TrackForm;
