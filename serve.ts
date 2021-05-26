import { serve } from './deps.ts';
import requestHandler from './api/index.ts';

const server = serve({ port: 8080 });
for await (const req of server) {
    requestHandler(req);
}
