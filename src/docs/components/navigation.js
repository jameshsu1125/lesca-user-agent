import { Button, ButtonGroup } from '@mui/material';
import { useEffect } from 'react';
import { name } from '../config';
import './navigation.less';

const Menu = ({ setState, state }) => (
  <ButtonGroup variant='contained' size='small' color='success'>
    <Button
      onClick={() => {
        setState('demo');
      }}
      disabled={state === 'demo'}
    >
      Demo
    </Button>
  </ButtonGroup>
);

const Navigation = ({ setState, state }) => (
  <div className='Navigation'>
    <div className='logo'>{name}</div>
  </div>
);
export default Navigation;
