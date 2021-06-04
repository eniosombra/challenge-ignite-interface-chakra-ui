import { NextApiRequest, NextApiResponse } from 'next'

import continents from '../../../assets/continents.json'

export default (request: NextApiRequest, response: NextApiResponse) => {
  return response.json(continents)
}
