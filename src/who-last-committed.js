import sketch from 'sketch'
import "@babel/polyfill";
import * as Abstract from "abstract-sdk"
import * as AbstractUtils from "./abstract-utils"

// const projectId = "ab8d54b0-502f-11e6-9379-dd323631859b";
// const branchId = "aced3b20-d2fc-11e8-8d15-8f513088894f";

export default async function(context) {
  const key = AbstractUtils.documentKey(context.document);
  const projectId = AbstractUtils.projectId(key);
  const branchId = AbstractUtils.branchId(key);

  log("pid: " + projectId);
  log("bid: " + branchId);

  const abstract = Abstract.Client({
    transport: Abstract.Transports.CLI
  });

  try {
    const commits = await abstract.commits.list({
      projectId,
      branchId
    });
  } catch(err) {
    log(err)
  }

  log("after commits fetch")

  log(commits);
}
