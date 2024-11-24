import React from "react";
import {render} from '@testing-library/react';
import {MemoryRouter as Router} from "react-router-dom";

export const renderWithRouter = (component: React.JSX.Element) => {
    return {
        ...render(<Router>{component} </Router>),
    };
};

