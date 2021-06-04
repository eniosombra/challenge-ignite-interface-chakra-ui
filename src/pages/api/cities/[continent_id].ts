import { NextApiRequest, NextApiResponse } from 'next'

import cities from '../../../assets/cities.json'

export default (request: NextApiRequest, response: NextApiResponse) => {
  const { continent_id } = request.query
  const data = cities.filter(
    city => String(city.continent_id) === String(continent_id)
  )

  return response.json(data)
}
