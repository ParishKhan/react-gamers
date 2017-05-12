/**
 * render.js
 */
import { renderToString } from 'react-dom/server';
import React from 'react';

export default (renderMe) => renderToString(renderMe);