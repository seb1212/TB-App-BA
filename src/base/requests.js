import React from 'react';
import apisauce from 'apisauce';
import { urls } from '../base/urls';

export const requests = {
  api: apisauce.create({
    baseURL: urls.baseURL,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Charset': 'UTF-8'
    },
    timeout: 8000,
  })
}
