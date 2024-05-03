import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'

import {visionTool} from '@sanity/vision'
import { media } from 'sanity-plugin-media'
import {schemaTypes} from './schemas'
import { myTheme } from './theme';
import StudioNavbar from './components/StudioNavbar';
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;


export default defineConfig({
  name: 'default',
  title: 'Admin dashboard',
  basePath: '/studio',

   projectId,
  dataset ,

  
  plugins: [deskTool(), visionTool() ,  media()],

  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      navbar: StudioNavbar
    }
  },
  theme: myTheme

})
