import { NextApiRequest, NextApiResponse } from 'next'

import continents from '../../../assets/continents.json'

export default (request: NextApiRequest, response: NextApiResponse) => {
  const { id } = request.query

  const data = continents.filter(
    continent => String(continent.id) === String(id)
  )
  return response.json(data)
}
