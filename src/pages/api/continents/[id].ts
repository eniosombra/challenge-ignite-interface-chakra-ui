import { NextApiRequest, NextApiResponse } from 'next'

import continents from '../../../assets/continents.json'

export default (request: NextApiRequest, response: NextApiResponse) => {
  const { id } = request.query

  const data = continents.find(continent => String(continent.id) === String(id))
  return response.json(data)
}
