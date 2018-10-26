import "@babel/polyfill";
import sketch from 'sketch'
import * as Abstract from "abstract-sdk";
import * as AbstractUtils from "./abstract-utils"

const { UI } = sketch;

const abstract = new Abstract.Client({
  transport: Abstract.TRANSPORTS.CLI
});

export default function(context) {
  const key = AbstractUtils.documentKey(context.document);
  const projectId = AbstractUtils.projectId(key);
  const branchId = AbstractUtils.branchId(key);

  var fiber = require("sketch/async").createFiber();

  UI.message(`${projectId} / ${branchId}`);

  abstract.commits.list({
    projectId,
    branchId
  })
  .then(commits => {
    UI.message(`done`);

    console.log(commits);
    fiber.cleanup();
  })
}
