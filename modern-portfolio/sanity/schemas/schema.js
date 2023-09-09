import { createSchema, type SchemaTypeDefinition } from 'sanity'

import pageInfo from './pageInfo'
import social from './social'
import skill from './skill'
import project from './project'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pageInfo, social, skill, project],
  
}