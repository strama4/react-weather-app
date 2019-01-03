import React from "react";
import { Link } from 'react-router-dom';

const Button = ({ location, text }) => (
    <Link className="button" to={location}>{text}</Link>
)

export default Button;