import { defineConfig } from "sanity";
import { deskTool } from 'sanity/desk';
import schemas from './sanity/schemas'

const config = defineConfig({
    projectId: '5q52l417',
    dataset: 'production',
    title: 'Byte & Crunch',
    apiVersion: '2023-06-10',
    basePath: '/admin',
    plugins: [deskTool()],
    schema: {types: schemas}
})

export default config;