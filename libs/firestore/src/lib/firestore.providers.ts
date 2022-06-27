import { IssueDocument } from "@wpoc/api-interfaces";

export const FirestoreDatabaseProvider = 'firestoredb';
export const FirestoreOptionsProvider = 'firestoreOptions'
export const FirestoreCollectionProviders: string[] = [
  IssueDocument.collectionName,
];
