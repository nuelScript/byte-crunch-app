import { defineConfig } from "sanity";
import { deskTool } from 'sanity/desk';
import { visionTool } from "@sanity/vision";
import schemas from './sanity/schemas'

const config = defineConfig({
    projectId: '5q52l417',
    dataset: 'production',
    title: 'Byte & Crunch',
    apiVersion: '2023-06-10',
    basePath: '/admin',
    plugins: [deskTool(), visionTool({ defaultApiVersion: 'v2021-03-25',
    defaultDataset: 'development',})],
    schema: {types: schemas}
})

export default config;