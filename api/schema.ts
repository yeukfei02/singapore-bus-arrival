import { makeSchema } from 'nexus';
import path from 'path';

import * as query from './query/query';
import * as mutation from './mutation/mutation';

export const schema = makeSchema({
  types: [query, mutation],
  outputs: {
    typegen: path.join(process.cwd(), '/generated/nexus-typegen.ts'),
    schema: path.join(process.cwd(), '/generated/schema.graphql'),
  },
});
