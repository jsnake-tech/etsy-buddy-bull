import * as root from 'src/routes/root';
import * as task from 'src/routes/task';
import { router } from 'src/utils/navigation';

export const routes = router({
  '/': {
    GET: root,
  },
  '/task': {
    POST: task,
  },
});
