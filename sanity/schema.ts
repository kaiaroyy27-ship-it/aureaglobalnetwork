import { SchemaTypeDefinition } from 'sanity'

import siteSettings from './documents/siteSettings'
import event from './documents/event'
import interview from './documents/interview'
import chapter from './documents/chapter'
import ambassador from './documents/ambassador'
import makeItMakeCentsPost from './documents/makeItMakeCentsPost'
import comingSoonProject from './documents/comingSoonProject'

export const schemaTypes: SchemaTypeDefinition[] = [
  siteSettings,
  event,
  interview,
  chapter,
  ambassador,
  makeItMakeCentsPost,
  comingSoonProject,
]
