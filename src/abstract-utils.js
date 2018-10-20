export function documentKey(document) {
    return PROSketchBootstrap.documentKey(context.document)
}
export function projectId(documentKey) {
    return documentKey.split("/")[0];
}
export function branchId(documentKey) {
    return documentKey.split("/")[1];
}
export function fileId(documentKey) {
    return documentKey.split("/")[3];
}