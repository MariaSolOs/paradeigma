import React from 'react';

// Custom type for a React functional component with props and children.
declare module 'react' {
    type FCC<P = {}> = React.FC<React.PropsWithChildren<P>>;
}