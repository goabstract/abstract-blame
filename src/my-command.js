import sketch from 'sketch'
import * as Abstract from "abstract-sdk"

function documentKey(document) {
  return PROSketchBootstrap.documentKey(context.document)
}

function projectId(documentKey) {
  return documentKey.split("/")[0];
}
function branchId(documentKey) {
  return documentKey.split("/")[1];
}
function fileId(documentKey) {
  return documentKey.split("/")[3];
}

export default async function(context) {
  // const key = documentKey(context.document);
  // log("project id: " + projectId(key))
  // log("branch id: " + branchId(key));
  // log("file id: " + fileId(key));

  console.log("hi")

  const abstract = Abstract.Client();

  // await abstract.projects.list()
}
